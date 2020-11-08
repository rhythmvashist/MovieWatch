export default (state,action) => {
    switch (action.type){
        case 'ADD_MOVIE_TO_LIST':
            return {
                ...state,
                watchlist:[action.payload,...state.watchlist]
            }
        default:
            return state;
    }
}