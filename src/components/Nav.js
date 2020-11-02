import React from 'react'   
import  './style/Nav.css'
import requests from './requests'


function Nav({selectedOption, setSelectedOption}) {
    return ( 
        <div className='nav'>
            <h2 className={`${selectedOption.includes('trending')?'active':'null'}`} onClick={()=> setSelectedOption(requests.fetchTrending)}>Trending</h2>

            <h2 className={`${selectedOption.includes('top_rated')?'active':'null'}`} onClick={()=> setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>

            <h2 className={`${selectedOption.includes('27')?'active':'null'}`} onClick={()=> setSelectedOption(requests.fetchHorrorMovie)}>Horror</h2>

            <h2 className={`${selectedOption.includes('28')?'active':'null'}`} onClick={()=> setSelectedOption(requests.fetchActionMovie)}>Action</h2>

            <h2 className={`${selectedOption.includes('35')?'active':'null'}`} onClick={()=> setSelectedOption(requests.fetchComedyMovie)}>Comedy</h2>

            <h2 className={`${selectedOption.includes('10749')?'active':'null'}`} onClick={()=> setSelectedOption(requests.fetchRomanceMovie)}>Romance</h2>

            <h2 className={`${selectedOption.includes('9648')?'active':'null'}`} onClick={()=> setSelectedOption(requests.fetchMystery)}>Mystery</h2>

            <h2 className={`${selectedOption.includes('878')?'active':'null'}`} onClick={()=> setSelectedOption(requests.fetchSciFci)}>Sci-Fci</h2>

            <h2 className={`${selectedOption.includes('16')?'active':'null'}`} onClick={()=> setSelectedOption(requests.fetchAnimaton)}>Animation</h2>

            <h2 className={`${selectedOption.includes('37')?'active':'null'}`}  onClick={()=> setSelectedOption(requests.fetchWestern)}>Western</h2>
        </div>
    )
}

export default Nav
