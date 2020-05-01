// normal object actions
const getSongs = (songs) => {
    return {
        type: 'GET_SONGS',
        payload: songs
    }
}

const addSong = (song) => {
    return {
        type: 'ADD_SONG',
        payload: song
    }
}


//   Async actions
export const fetchSongs = () => {
    return (dispatch) => {
        dispatch({type: 'FETCH_SONGS'})
        return fetch('http://localhost:3001/songs')
        .then(res => res.json())
        .then(songs => {
           let modifiedSongs = songs
           console.log("songs:", songs)
            dispatch(getSongs(modifiedSongs))
        })
    }
}

export const createSong = (song) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/songs', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({song: song})
        })
        .then(res => res.json())
        .then(song => {
            dispatch(addSong(song))
        })
    }
}