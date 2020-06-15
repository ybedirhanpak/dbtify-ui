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
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchArtistFail(data));
          alert.error(data.message);
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
          alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchAllArtistsFail(data));
          alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};
