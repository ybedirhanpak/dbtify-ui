import { Post, Success } from "../../helpers/requestHelper";

/* Action Types */

const ARTIST_REGISTER_SUCCESS = "ARTIST_REGISTER_SUCCESS";
const ARTIST_REGISTER_FAIL = "ARTIST_REGISTER_FAIL";

export const actionTypes = {
  ARTIST_REGISTER_SUCCESS,
  ARTIST_REGISTER_FAIL,
};

/* Action Creators */

const artistRegisterSuccess = (message) => {
  return {
    type: ARTIST_REGISTER_SUCCESS,
    payload: message,
  };
};

const artistRegisterFail = (message) => {
  return {
    type: ARTIST_REGISTER_FAIL,
    payload: message,
  };
};

export const actionCreators = {};

/* Request Creators */

export const requestArtistRegister = (artist, alert) => {
  return async (dispatch) => {
    return Post("/artist/register", artist).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(artistRegisterSuccess(data.message));
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(artistRegisterFail(data.message));
          alert.error(data.message);
        });
      }
    });
  };
};
