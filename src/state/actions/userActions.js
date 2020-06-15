import { Post, Success } from "../../helpers/requestHelper";

/* Action Types */

const USER_RESET = "USER_RESET";

const ARTIST_REGISTER_SUCCESS = "ARTIST_REGISTER_SUCCESS";
const ARTIST_REGISTER_FAIL = "ARTIST_REGISTER_FAIL";
const ARTIST_LOGIN_SUCCESS = "ARTIST_LOGIN_SUCCESS";
const ARTIST_LOGIN_FAIL = "ARTIST_LOGIN_FAIL";

const LISTENER_REGISTER_SUCCESS = "LISTENER_REGISTER_SUCCESS";
const LISTENER_REGISTER_FAIL = "LISTENER_REGISTER_FAIL";
const LISTENER_LOGIN_SUCCESS = "LISTENER_LOGIN_SUCCESS";
const LISTENER_LOGIN_FAIL = "LISTENER_LOGIN_FAIL";

export const actionTypes = {
  USER_RESET,
  ARTIST_REGISTER_SUCCESS,
  ARTIST_REGISTER_FAIL,
  ARTIST_LOGIN_SUCCESS,
  ARTIST_LOGIN_FAIL,
  LISTENER_REGISTER_SUCCESS,
  LISTENER_REGISTER_FAIL,
  LISTENER_LOGIN_SUCCESS,
  LISTENER_LOGIN_FAIL,
};

/* Action Creators */

const userReset = () => {
  return {
    type: USER_RESET,
  };
};

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

const artistLoginSuccess = (response) => {
  return {
    type: ARTIST_LOGIN_SUCCESS,
    payload: response,
  };
};

const artistLoginFail = (response) => {
  return {
    type: ARTIST_LOGIN_FAIL,
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

const listenerLoginSuccess = (response) => {
  return {
    type: LISTENER_LOGIN_SUCCESS,
    payload: response,
  };
};

const listenerLoginFail = (response) => {
  return {
    type: LISTENER_LOGIN_FAIL,
    payload: response,
  };
};

export const actionCreators = {
  userReset,
};

/* Request Creators */

export const requestArtistRegister = (artist, alert) => {
  return async (dispatch) => {
    dispatch(userReset());
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

export const requestArtistLogin = (artist, alert) => {
  return async (dispatch) => {
    dispatch(userReset());
    return Post("/artist/login", artist).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(artistLoginSuccess(data));
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(artistLoginFail(data));
          alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestListenerRegister = (listener, alert) => {
  return async (dispatch) => {
    dispatch(userReset());
    return Post("/listener/register", listener).then((response) => {
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

export const requestListenerLogin = (listener, alert) => {
  return async (dispatch) => {
    dispatch(userReset());
    return Post("/listener/login", listener).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(listenerLoginSuccess(data));
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(listenerLoginFail(data));
          alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};
