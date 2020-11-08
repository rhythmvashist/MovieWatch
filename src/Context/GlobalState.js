import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

// initial state 
const initialState = {
    watchlist:[],
    watched:[]
};


// create Context
export const GlobalContext = createContext(initialState);

// provider context components

export const GlobalProvider =  (props) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

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