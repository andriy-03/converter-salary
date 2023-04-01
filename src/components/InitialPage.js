import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const InitialPage = () => {
  const [value, setValue] = useState('EUR')
  const [hourly, setHourly] = useState('')
  const [days, setDays] = useState('')
  const [hours, setHours] = useState('')

  function handleValue(e) {
    setValue(e.target.value);
  }

  function handleHourly(event) {
    setHourly(event.target.value)
  }

  function handleDays(event) {
    setDays(event.target.value)
  }

  function handleHour(event) {
    setHours(event.target.value)
  }


  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='display'>
      <div className='content'>
        <form onSubmit={handleSubmit}>
        <div className="list-currency">
          <label>Choose currency:
          <br />
          <div className='select'>
        <select value={value} onChange={handleValue}>
          <option value="USD">Dollar $</option>
          <option value="EUR">Euro €</option>
          <option value="GBP">Pound £</option>
          <option value="PLN">Złoty zł</option>
        </select>
        </div>
        </label>
        </div>
        
        <div className='input-earnings'>
        <label>You earnings per hour:
          <br />
        <input type="number" placeholder='Earnings...' onChange={handleHourly} />
        </label>
        </div>

        <div className='input-days'>
        <label>Number of working days per week:
          <br />
        <input type="number" placeholder='Days...' min='1' max='7' onChange={handleDays} />
        </label>
        </div>
        
      <div className='input-hours'>
        <label>Quantity hours a day do you work:
        <br />
        <input type="number" placeholder='Hours...' min="1" max="24" onChange={handleHour} />
        </label>
        <br />

          </div>
          </form>
          <button className="button button1" type='submit'>
            <a href='/'>
          <Link to={`/currency/${value}/${hourly}/${days}/${hours}`}>See details your earnings</Link>
          </a>
          </button>
      </div>
    </div>
  )
}

export default InitialPage