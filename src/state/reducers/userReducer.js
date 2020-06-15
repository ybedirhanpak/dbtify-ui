import { actionTypes } from "../actions/userActions";

const initialState = {
  artist: null,
  listener: null,
  message: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ARTIST_REGISTER_SUCCESS:
      return { ...state, message: action.payload };
    case actionTypes.ARTIST_REGISTER_FAIL:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default userReducer;
