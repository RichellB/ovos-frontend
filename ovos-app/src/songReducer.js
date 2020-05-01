const songReducer = (state = {songs: [] }, action) => {
    switch(action.type) {
        case 'FETCH_SONGS':
            return {...state}
        case 'GET_SONGS':
            return {...state, songs: action.payload}
        case 'ADD_SONG':
            return {...state, songs: [action.payload, ...state.songs]}
        default:
            return state
    }
}


export default songReducer