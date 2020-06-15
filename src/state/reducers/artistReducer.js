import { actionTypes } from "../actions/artistActions";

const initialState = {
  album: {
    list: null,
    message: "",
    error: "",
  },
  song: {
    list: null,
    message: "",
    error: "",
  },
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ALBUM_SUCCESS:
      return {
        ...state,
        album: { ...state.album, message: action.payload.message },
      };
    case actionTypes.CREATE_ALBUM_FAIL:
      return {
        ...state,
        album: {
          ...state.album,
          message: action.payload.message,
          error: action.payload.error,
        },
      };
    case actionTypes.CREATE_SONG_SUCCESS:
      return {
        ...state,
        song: {
          ...state.song,
          message: action.payload.message,
        },
      };
    case actionTypes.CREATE_SONG_FAIL:
      return {
        ...state,
        song: {
          ...state.song,
          message: action.payload.message,
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
};

export default artistReducer;
