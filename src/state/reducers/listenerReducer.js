import { actionTypes } from "../actions/listenerActions";

const initialState = {
  albumList: [],
  songList: [],
  listenerList: [],
  songSearchList: [],
  songGenreList: [],
  album: null,
  song: null,
  current: null,
  message: "",
  error: "",
};

const listenerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_ALBUMS_SUCCESS:
      return {
        ...state,
        albumList: action.payload.albums,
        message: action.payload.message,
      };
    case actionTypes.FETCH_ALL_ALBUMS_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        album: action.payload.album,
        message: action.payload.message,
      };
    case actionTypes.FETCH_ALBUM_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.FETCH_ALL_SONGS_SUCCESS:
      return {
        ...state,
        songList: action.payload.songs,
        message: action.payload.message,
      };
    case actionTypes.FETCH_ALL_SONGS_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.FETCH_ALL_LISTENERS_SUCCESS:
      return {
        ...state,
        listenerList: action.payload.listeners,
        message: action.payload.message,
      };
    case actionTypes.FETCH_ALL_LISTENERS_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.FETCH_SONG_SEARCH_SUCCESS:
      return {
        ...state,
        songSearchList: action.payload.songs,
        message: action.payload.message,
      };
    case actionTypes.FETCH_SONG_SEARCH_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.FETCH_SONG_GENRE_SUCCESS:
      return {
        ...state,
        songGenreList: action.payload.songs,
        message: action.payload.message,
      };
    case actionTypes.FETCH_SONG_GENRE_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.FETCH_LISTENER_SUCCESS:
      return {
        ...state,
        current: action.payload.listener,
        message: action.payload.message,
      };
    case actionTypes.FETCH_LISTENER_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.LIKE_SONG_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case actionTypes.LIKE_SONG_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.LIKE_ALBUM_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case actionTypes.LIKE_ALBUM_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.FETCH_SONG_SUCCESS:
      return {
        ...state,
        song: action.payload.song,
        message: action.payload.message,
      };
    case actionTypes.FETCH_SONG_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default listenerReducer;
