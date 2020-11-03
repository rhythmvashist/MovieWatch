import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Result from "./components/Result";
import requests from "./components/requests";

import "./App.css";
import PageCount from "./components/PageCount";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  return (
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
      />
      <PageCount pageNumber={page} setPageNumber={setPage} />
    </div>
  );
}

export default App;
