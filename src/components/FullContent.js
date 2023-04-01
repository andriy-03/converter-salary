import React from 'react'
import { useParams } from 'react-router';
import DisplayEarnings from './DisplayEarnings';
import CardDetails from './CardDetails';

function FullContent() {

  // Get parameters from link
  const params = useParams();
  const currency = params.currencyId;
  const hourly = params.hourly;
  const days = params.days;
  const hours = params.hours;

  const summPerSecond = (Number(hourly) / 60).toFixed(2);
  const summPerDay = Number(hourly) * Number(hours);
  const summPerWeek = Number(hourly) * Number(hours) * days;
  const summPerMonth = Number(hourly) * Number(hours) * days * 4;
  const summPerYear = Number(hourly) * Number(hours) * days * 4 * 12;

  return (
    <>
    <div className="split left">
      <div>
        <DisplayEarnings currency={currency} hourly={hourly} days={days} hours={hours} summPerSecond={summPerSecond} summPerDay={summPerDay} summPerWeek={summPerWeek} summPerMonth={summPerMonth} summPerYear={summPerYear} />
      </div>
      </div>
      <CardDetails summPerMoth={summPerMonth} currency={currency} />
    </>
  )
}

export default FullContent