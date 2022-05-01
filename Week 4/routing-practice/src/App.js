import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import ParamRoute from './components/ParamRoute';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/home' element={<Welcome/>} />
          <Route path='/:word' element={<ParamRoute/>} />
          <Route path='/:word/:color/:bgColor' element={<ParamRoute/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
