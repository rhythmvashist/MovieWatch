import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Result from "./components/Result";
import requests from "./components/requests";
import "./App.css";
import PageCount from "./components/PageCount";


import {GlobalProvider} from './Context/GlobalState';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPage,setTotalPage] = useState(1);

  return (
    <GlobalProvider>
      <div className="App">
        <Header setSelectedOption={setSelectedOption} />
        <Nav
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <Result
          movies={movies}
          setMovies={setMovies}
          selectedOption={selectedOption}
          page={page}
          setPage={setPage}
          setTotalPage={setTotalPage}
        />
        <PageCount pageNumber={page} setPageNumber={setPage} totalPage={totalPage}/>
      </div>
    </GlobalProvider>
  );
}

export default App;
