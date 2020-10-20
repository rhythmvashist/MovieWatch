import React from 'react';
import Header from './components/Header'
import  Nav from './components/Nav'
import  Result from './components/Result'

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Nav/>
      <Result/>

      {/** Footer */}

    </div>
  );
}

export default App;
