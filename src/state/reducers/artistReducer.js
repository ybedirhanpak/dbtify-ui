import { actionTypes } from "../actions/artistActions";

const initialState = {
  current: null,
  list: null,
  checkedAlbum: null,
  checkedProducerList: [],
  message: "",
  error: "",
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ALBUM_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case actionTypes.CREATE_ALBUM_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.CREATE_SONG_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case actionTypes.CREATE_SONG_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        current: action.payload.artist,
        message: action.payload.message,
      };
    case actionTypes.FETCH_ARTIST_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.FETCH_ALL_ARTISTS_SUCCESS:
      return {
        ...state,
        list: action.payload.artists,
        message: action.payload.message,
      };
    case actionTypes.FETCH_ALL_ARTISTS_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.DELETE_ALBUM_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case actionTypes.DELETE_ALBUM_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.DELETE_SONG_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case actionTypes.DELETE_SONG_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default artistReducer;
