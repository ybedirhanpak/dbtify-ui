import { Post, Success } from "../../helpers/requestHelper";

/* Action Types */

const CREATE_ALBUM_SUCCESS = "CREATE_ALBUM_SUCCESS";
const CREATE_ALBUM_FAIL = "CREATE_ALBUM_FAIL";
const CREATE_SONG_SUCCESS = "CREATE_SONG_SUCCESS";
const CREATE_SONG_FAIL = "CREATE_SONG_FAIL";

export const actionTypes = {
  CREATE_ALBUM_SUCCESS,
  CREATE_ALBUM_FAIL,
  CREATE_SONG_SUCCESS,
  CREATE_SONG_FAIL,
};

/* Action Creators */

const createAlbumSuccess = (response) => {
  return {
    type: CREATE_ALBUM_SUCCESS,
    payload: response,
  };
};

const createAlbumFail = (response) => {
  return {
    type: CREATE_ALBUM_FAIL,
    payload: response,
  };
};

const createSongSuccess = (response) => {
  return {
    type: CREATE_SONG_SUCCESS,
    payload: response,
  };
};

const createSongFail = (response) => {
  return {
    type: CREATE_SONG_FAIL,
    payload: response,
  };
};

export const actionCreators = {};

/* Request Creators */

export const requestCreateAlbum = (album, alert) => {
  return async (dispatch) => {
    return Post("/album/create", album).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(createAlbumSuccess(data));
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(createAlbumFail(data));
          alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestCreateSong = (song, alert) => {
  return async (dispatch) => {
    return Post("/song/create", song).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(createSongSuccess(data));
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(createSongFail(data));
          alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};
