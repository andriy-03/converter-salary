import React from 'react';

function DisplayEarnings({ currency, hourly, days, hours, summPerSecond, summPerDay, summPerWeek, summPerMonth, summPerYear }) {

  return (
    <>
    <div className='container'>
          <div className='results'>
          <h1>Results</h1> <h2>Per second: {summPerSecond}</h2>
          <h2>Per day: {summPerDay}</h2>
          <h2>Per week: {summPerWeek}</h2>
          <h2>Per month: {summPerMonth}</h2>
          <h2>Per year: {summPerYear}</h2>
          </div>
          <div className='area'>
          </div>
          <div className='setted-info'>
          <h1>Info that you previously set</h1>
          <h2>Your choosed currency: {currency}</h2>
          <h2>You get per hour: {hourly}</h2>
          <h2>Numbers days you working: {days}</h2>
          <h2>Time per day: {hours}</h2>
          </div>
    </div>
    </>
  )
}

export default DisplayEarnings