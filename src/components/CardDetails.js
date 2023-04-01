import React, { useState, useEffect } from "react";
import ConvertRow from "./ConvertRow";
import axios from "axios";

function CardDetails({ summPerMoth, currency }) {
  

  // Set state
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(summPerMoth)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = (amount * exchangeRate).toFixed(2)
  } else {
    toAmount = amount
    fromAmount = (amount / exchangeRate).toFixed(2)
  }

  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/5ea172a401547858895c2c7a/latest/CAD')
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.conversion_rates)[0]
        setCurrencyOptions([...Object.keys(data.conversion_rates)])
        setFromCurrency(currency)
        setToCurrency(firstCurrency)
        setExchangeRate(data.conversion_rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`https://v6.exchangerate-api.com/v6/5ea172a401547858895c2c7a/latest/${fromCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.conversion_rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <>
      <div className="split right">
        <div className="header">
          <h1>Converter</h1>
      <h2>&nbsp;Here you can convert currency and see your earnings in different currency.
        <br />
        <br />
        &nbsp;Your earnings per month is setted for convert (by default)
      </h2>
      </div>
        <div className="centered">
      <ConvertRow
      currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount} 
        />
        <div className="equal">
        <h1>&#61;</h1>
        </div>
        <ConvertRow 
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
        />
        </div>
      </div>
    </>
  );
}

export default CardDetails;