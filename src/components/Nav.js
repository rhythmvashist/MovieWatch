import React from 'react'   
import  './style/Nav.css'
import requests from './requests'


function Nav({setSelectedOption}) {
    return (
        <div className='nav'>
            <h2 onClick={()=> setSelectedOption(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={()=> setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={()=> setSelectedOption(requests.fetchHorrorMovie)}>Horror</h2>
            <h2 onClick={()=> setSelectedOption(requests.fetchActionMovie)}>Action</h2>
            <h2 onClick={()=> setSelectedOption(requests.fetchComedyMovie)}>Comedy</h2>
            <h2 onClick={()=> setSelectedOption(requests.fetchRomanceMovie)}>Romance</h2>
            <h2 onClick={()=> setSelectedOption(requests.fetchMystery)}>Mystery</h2>
            <h2 onClick={()=> setSelectedOption(requests.fetchSciFci)}>Sci-Fci</h2>
            <h2 onClick={()=> setSelectedOption(requests.fetchAnimaton)}>Animation</h2>
            <h2 onClick={()=> setSelectedOption(requests.fetchWestern)}>Western</h2>

        </div>
    )
}

export default Nav
