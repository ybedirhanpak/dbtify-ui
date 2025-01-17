import { Post, Success, Get } from "../../helpers/requestHelper";

/* Action Types */

const CREATE_ALBUM_SUCCESS = "CREATE_ALBUM_SUCCESS";
const CREATE_ALBUM_FAIL = "CREATE_ALBUM_FAIL";

const CREATE_SONG_SUCCESS = "CREATE_SONG_SUCCESS";
const CREATE_SONG_FAIL = "CREATE_SONG_FAIL";

const FETCH_ARTIST_SUCCESS = "FETCH_ARTIST_SUCCESS";
const FETCH_ARTIST_FAIL = "FETCH_ARTIST_FAIL";

const FETCH_ALL_ARTISTS_SUCCESS = "FETCH_ALL_ARTISTS_SUCCESS";
const FETCH_ALL_ARTISTS_FAIL = "FETCH_ALL_ARTISTS_FAIL";

const CHECK_ARTIST = "CHECK_ARTIST";
const CHECK_PRODUCER = "CHECK_PRODUCER";

const DELETE_ALBUM_SUCCESS = "DELETE_ALBUM_SUCCESS";
const DELETE_ALBUM_FAIL = "DELETE_ALBUM_FAIL";

const DELETE_SONG_SUCCESS = "DELETE_SONG_SUCCESS";
const DELETE_SONG_FAIL = "DELETE_SONG_FAIL";

const UPDATE_ALBUM_SUCCESS = "UPDATE_ALBUM_SUCCESS";
const UPDATE_ALBUM_FAIL = "UPDATE_ALBUM_FAIL";

const UPDATE_SONG_SUCCESS = "UPDATE_SONG_SUCCESS";
const UPDATE_SONG_FAIL = "UPDATE_SONG_FAIL";

const FETCH_CURRENT_ARTIST_SUCCESS = "FETCH_CURRENT_ARTIST_SUCCESS";
const FETCH_CURRENT_ARTIST_FAIL = "FETCH_CURRENT_ARTIST_FAIL";

export const actionTypes = {
  CREATE_ALBUM_SUCCESS,
  CREATE_ALBUM_FAIL,
  CREATE_SONG_SUCCESS,
  CREATE_SONG_FAIL,
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_FAIL,
  FETCH_ALL_ARTISTS_SUCCESS,
  FETCH_ALL_ARTISTS_FAIL,
  CHECK_ARTIST,
  CHECK_PRODUCER,
  DELETE_ALBUM_SUCCESS,
  DELETE_ALBUM_FAIL,
  DELETE_SONG_SUCCESS,
  DELETE_SONG_FAIL,
  UPDATE_ALBUM_SUCCESS,
  UPDATE_ALBUM_FAIL,
  UPDATE_SONG_SUCCESS,
  UPDATE_SONG_FAIL,
  FETCH_CURRENT_ARTIST_SUCCESS,
  FETCH_CURRENT_ARTIST_FAIL,
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

const fetchArtistSuccess = (response) => {
  return {
    type: FETCH_ARTIST_SUCCESS,
    payload: response,
  };
};

const fetchArtistFail = (response) => {
  return {
    type: FETCH_ARTIST_FAIL,
    payload: response,
  };
};

const fetchAllArtistsSuccess = (response) => {
  return {
    type: FETCH_ALL_ARTISTS_SUCCESS,
    payload: response,
  };
};

const fetchAllArtistsFail = (response) => {
  return {
    type: FETCH_ALL_ARTISTS_FAIL,
    payload: response,
  };
};

const checkArtist = (artistID) => {
  return {
    type: CHECK_ARTIST,
    payload: artistID,
  };
};

const checkProducer = (producerID) => {
  return {
    type: CHECK_PRODUCER,
    payload: producerID,
  };
};

const deleteAlbumSuccess = (response) => {
  return {
    type: DELETE_ALBUM_SUCCESS,
    payload: response,
  };
};

const deleteAlbumFail = (response) => {
  return {
    type: DELETE_ALBUM_FAIL,
    payload: response,
  };
};

const deleteSongSuccess = (response) => {
  return {
    type: DELETE_SONG_SUCCESS,
    payload: response,
  };
};

const deleteSongFail = (response) => {
  return {
    type: DELETE_SONG_FAIL,
    payload: response,
  };
};

const updateAlbumSuccess = (response) => {
  return {
    type: UPDATE_ALBUM_SUCCESS,
    payload: response,
  };
};

const updateAlbumFail = (response) => {
  return {
    type: UPDATE_ALBUM_FAIL,
    payload: response,
  };
};

const updateSongSuccess = (response) => {
  return {
    type: UPDATE_SONG_SUCCESS,
    payload: response,
  };
};

const updateSongFail = (response) => {
  return {
    type: UPDATE_SONG_FAIL,
    payload: response,
  };
};

const fetchCurrentArtistSuccess = (response) => {
  return {
    type: FETCH_CURRENT_ARTIST_SUCCESS,
    payload: response,
  };
};

const fetchCurrentArtistFail = (response) => {
  return {
    type: FETCH_CURRENT_ARTIST_FAIL,
    payload: response,
  };
};

export const actionCreators = {
  checkArtist,
  checkProducer,
};

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

export const requestFetchArtist = (id, alert) => {
  return async (dispatch) => {
    return Get(`/artist/get/${id}`).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(fetchArtistSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchArtistFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestFetchAllArtists = (alert) => {
  return async (dispatch) => {
    return Get(`/artist/getAll`).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(fetchAllArtistsSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchAllArtistsFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestDeleteAlbum = (id, alert) => {
  return async (dispatch) => {
    return Post(`/album/delete/${id}`).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(deleteAlbumSuccess(data));
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(deleteAlbumFail(data));
          alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestDeleteSong = (id, alert) => {
  return async (dispatch) => {
    return Post(`/song/delete/${id}`).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(deleteSongSuccess(data));
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(deleteSongFail(data));
          alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestUpdateAlbum = (id, album, alert) => {
  return async (dispatch) => {
    return Post(`/album/update/${id}`, album).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(updateAlbumSuccess(data));
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(updateAlbumFail(data));
          alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestUpdateSong = (id, song, alert) => {
  return async (dispatch) => {
    return Post(`/song/update/${id}`, song).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(updateSongSuccess(data));
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(updateSongFail(data));
          alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestFetchCurrentArtist = (id, alert) => {
  return async (dispatch) => {
    return Get(`/artist/get/${id}`).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(fetchCurrentArtistSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchCurrentArtistFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};
