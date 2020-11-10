import React,{createContext,useReducer,useEffect} from 'react'
import AppReducer from './AppReducer'

// initial state 
const initialState = {
    watchlist:localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')):[],
    watched:localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')):[]
};

// create Context
export const GlobalContext = createContext(initialState);


// provider context components
export const GlobalProvider =  (props) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    useEffect(()=>{
        localStorage.setItem('watchlist',JSON.stringify(state.watchlist))
        localStorage.setItem('watched',JSON.stringify(state.watched))
    },[state])
    

    // actions 
    const addMovieToList = (movie) =>{
        dispatch({ type:'ADD_MOVIE_TO_LIST',payload: movie});
    }

    return (
        <GlobalContext.Provider value={{watchlist:state.watchlist,watched:state.watched,addMovieToList}}>
            {props.children}
        </GlobalContext.Provider>
    )
}