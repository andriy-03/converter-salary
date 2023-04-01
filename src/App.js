// // 1. Add style
// // 2. Craete component into components folder
// // 3. Create api folder and make api request
// // 4. Create useState, fetch and display data from api

// import "./App.css";
// import { useState } from "react";
// import GetData from "./api/GetRate";

// function App() {
//   const [data, setData] = useState();
//   const [currency, setCurrency] = useState([]);

//   GetData(setData, currency);
//   return (
//     <>
//       {/* <Input currency={currency} setCurrency={setCurrency} /> */}
//     </>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import InitialPage from './components/InitialPage'
import Error from './components/Error';
import FullContent from './components/FullContent';
import './App.css';

function App() {

  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/' element={ <InitialPage />} />
        <Route path='/currency/:currencyId/:hourly/:days/:hours' element={ <FullContent /> } />
        <Route path='/*' element={ <Error /> }></Route>
        {/* <Route path='/currency/:currencyId/:hourly/:days' element={ <ErrorHours />} />
        <Route path='/currency/:currencyId/:hourly' element={ <ErrorDaysHours />} />
        <Route path='/currency/:currencyId/:days/:hours' element={ <ErrorHourly />} /> */}
      </Routes>
    </div>
    </>
  );
}

export default App;
