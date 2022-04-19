import React from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Ads from './components/Ads';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main>
        <SubContents/>
        <SubContents/>
        <SubContents/>
        <Ads/>
      </Main>
    </div>
  );
}

export default App;
