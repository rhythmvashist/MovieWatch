import React,{useState} from 'react';
import Header from './components/Header'
import  Nav from './components/Nav'
import  Result from './components/Result'
import requests from './components/requests'

import './App.css';

function App() {
  const [selectedOption,setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="App">
      <Header />
      <Nav setSelectedOption={setSelectedOption}/>
      <Result selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
