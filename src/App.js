import './App.css';
import React from 'react';
import Home from './Components/Home/Home';
import Summary from './Components/Summary/Summary';
import Form from './Components/Form/Form';
import {Routes, Route} from 'react-router-dom';
const App = () => {

  return(
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/summary" element={<Summary  />} />
          <Route path='/form' element={<Form/>} />
    </Routes>
  )
};

export default App;