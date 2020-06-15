import { Post, Success } from "../../helpers/requestHelper";

/* Action Types */

const ARTIST_REGISTER_SUCCESS = "ARTIST_REGISTER_SUCCESS";
const ARTIST_REGISTER_FAIL = "ARTIST_REGISTER_FAIL";

const LISTENER_REGISTER_SUCCESS = "LISTENER_REGISTER_SUCCESS";
const LISTENER_REGISTER_FAIL = "LISTENER_REGISTER_FAIL";

export const actionTypes = {
  ARTIST_REGISTER_SUCCESS,
  ARTIST_REGISTER_FAIL,
  LISTENER_REGISTER_SUCCESS,
  LISTENER_REGISTER_FAIL,
};

/* Action Creators */

const artistRegisterSuccess = (response) => {
  return {
    type: ARTIST_REGISTER_SUCCESS,
    payload: response,
  };
};

const artistRegisterFail = (response) => {
  return {
    type: ARTIST_REGISTER_FAIL,
    payload: response,
  };
};

const listenerRegisterSuccess = (response) => {
  return {
    type: LISTENER_REGISTER_SUCCESS,
    payload: response,
  };
};

const listenerRegisterFail = (response) => {
  return {
    type: LISTENER_REGISTER_FAIL,
    payload: response,
  };
};

export const actionCreators = {};

/* Request Creators */

export const requestArtistRegister = (artist, alert) => {
  return async (dispatch) => {
    return Post("/artist/register", artist).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(artistRegisterSuccess(data));
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(artistRegisterFail(data));
          alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestListenerRegister = (artist, alert) => {
  return async (dispatch) => {
    return Post("/listener/register", artist).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(listenerRegisterSuccess(data));
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(listenerRegisterFail(data));
          alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};
