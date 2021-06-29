import { combineReducers } from 'redux';

// Song list reducer
const songsReducer = () => {
    return [
        { title: 'Amar moner sokol asha', duration: '4:50' },
        { title: 'My Best Time', duration: '2:30' },
        { title: 'Remember Me', duration: '3:15' },
        { title: 'I am a believer', duration: '4:00' }
    ];
};

// Selected Song Reducer
const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

