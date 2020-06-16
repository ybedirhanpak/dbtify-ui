import { Post, Success, Get } from "../../helpers/requestHelper";

/* Action Types */

const FETCH_ALL_ALBUMS_SUCCESS = "FETCH_ALL_ALBUMS_SUCCESS";
const FETCH_ALL_ALBUMS_FAIL = "FETCH_ALL_ALBUMS_FAIL";

const FETCH_ALBUM_SUCCESS = "FETCH_ALBUM_SUCCESS";
const FETCH_ALBUM_FAIL = "FETCH_ALBUM_FAIL";

const FETCH_ALL_SONGS_SUCCESS = "FETCH_ALL_SONGS_SUCCESS";
const FETCH_ALL_SONGS_FAIL = "FETCH_ALL_SONGS_FAIL";

const FETCH_ALL_LISTENERS_SUCCESS = "FETCH_ALL_LISTENERS_SUCCESS";
const FETCH_ALL_LISTENERS_FAIL = "FETCH_ALL_LISTENERS_FAIL";

const FETCH_SONG_SEARCH_SUCCESS = "FETCH_SONG_SEARCH_SUCCESS";
const FETCH_SONG_SEARCH_FAIL = "FETCH_SONG_SEARCH_FAIL";

const FETCH_SONG_GENRE_SUCCESS = "FETCH_SONG_GENRE_SUCCESS";
const FETCH_SONG_GENRE_FAIL = "FETCH_SONG_GENRE_FAIL";

const FETCH_LISTENER_SUCCESS = "FETCH_LISTENER_SUCCESS";
const FETCH_LISTENER_FAIL = "FETCH_LISTENER_FAIL";

const FETCH_CURRENT_LISTENER_SUCCESS = "FETCH_CURRENT_LISTENER_SUCCESS";
const FETCH_CURRENT_LISTENER_FAIL = "FETCH_CURRENT_LISTENER_FAIL";

const LIKE_SONG_SUCCESS = "LIKE_SONG_SUCCESS";
const LIKE_SONG_FAIL = "LIKE_SONG_FAIL";

const LIKE_ALBUM_SUCCESS = "LIKE_ALBUM_SUCCESS";
const LIKE_ALBUM_FAIL = "LIKE_ALBUM_FAIL";

export const actionTypes = {
  FETCH_ALL_ALBUMS_SUCCESS,
  FETCH_ALL_ALBUMS_FAIL,
  FETCH_ALL_SONGS_SUCCESS,
  FETCH_ALL_SONGS_FAIL,
  FETCH_ALL_LISTENERS_SUCCESS,
  FETCH_ALL_LISTENERS_FAIL,
  FETCH_SONG_SEARCH_SUCCESS,
  FETCH_SONG_SEARCH_FAIL,
  FETCH_SONG_GENRE_SUCCESS,
  FETCH_SONG_GENRE_FAIL,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAIL,
  FETCH_LISTENER_SUCCESS,
  FETCH_LISTENER_FAIL,
  FETCH_CURRENT_LISTENER_SUCCESS,
  FETCH_CURRENT_LISTENER_FAIL,
  LIKE_SONG_SUCCESS,
  LIKE_SONG_FAIL,
  LIKE_ALBUM_SUCCESS,
  LIKE_ALBUM_FAIL,
};

/* Action Creators */
const fetchAllAlbumsSuccess = (response) => {
  return {
    type: FETCH_ALL_ALBUMS_SUCCESS,
    payload: response,
  };
};

const fetchAllAlbumsFail = (response) => {
  return {
    type: FETCH_ALL_ALBUMS_FAIL,
    payload: response,
  };
};

const fetchAlbumSuccess = (response) => {
  return {
    type: FETCH_ALBUM_SUCCESS,
    payload: response,
  };
};

const fetchAlbumFail = (response) => {
  return {
    type: FETCH_ALBUM_FAIL,
    payload: response,
  };
};

const fetchAllSongsSuccess = (response) => {
  return {
    type: FETCH_ALL_SONGS_SUCCESS,
    payload: response,
  };
};

const fetchAllSongsFail = (response) => {
  return {
    type: FETCH_ALL_SONGS_FAIL,
    payload: response,
  };
};

const fetchAllListenersSuccess = (response) => {
  return {
    type: FETCH_ALL_LISTENERS_SUCCESS,
    payload: response,
  };
};

const fetchAllListenersFail = (response) => {
  return {
    type: FETCH_ALL_LISTENERS_FAIL,
    payload: response,
  };
};

const fetchSongSearchSuccess = (response) => {
  return {
    type: FETCH_SONG_SEARCH_SUCCESS,
    payload: response,
  };
};

const fetchSongSearchFail = (response) => {
  return {
    type: FETCH_SONG_SEARCH_FAIL,
    payload: response,
  };
};

const fetchSongGenreSuccess = (response) => {
  return {
    type: FETCH_SONG_GENRE_SUCCESS,
    payload: response,
  };
};

const fetchSongGenreFail = (response) => {
  return {
    type: FETCH_SONG_GENRE_FAIL,
    payload: response,
  };
};

const fetchListenerSuccess = (response) => {
  return {
    type: FETCH_LISTENER_SUCCESS,
    payload: response,
  };
};

const fetchListenerFail = (response) => {
  return {
    type: FETCH_LISTENER_FAIL,
    payload: response,
  };
};

const fetchCurrentListenerSuccess = (response) => {
  return {
    type: FETCH_CURRENT_LISTENER_SUCCESS,
    payload: response,
  };
};

const fetchCurrentListenerFail = (response) => {
  return {
    type: FETCH_CURRENT_LISTENER_FAIL,
    payload: response,
  };
};

const likeSongSuccess = (response) => {
  return {
    type: LIKE_SONG_SUCCESS,
    payload: response,
  };
};

const likeSongFail = (response) => {
  return {
    type: LIKE_SONG_FAIL,
    payload: response,
  };
};

const likeAlbumSuccess = (response) => {
  return {
    type: LIKE_ALBUM_SUCCESS,
    payload: response,
  };
};

const likeAlbumFail = (response) => {
  return {
    type: LIKE_ALBUM_FAIL,
    payload: response,
  };
};

export const actionCreators = {};

/* Request Creators */

export const requestFetchAllAlbums = (alert) => {
  return async (dispatch) => {
    return Get(`/album/getAll`).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(fetchAllAlbumsSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchAllAlbumsFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestFetchAlbum = (id, alert) => {
  return async (dispatch) => {
    return Get(`/album/get/${id}`).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(fetchAlbumSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchAlbumFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestFetchAllSongs = (alert) => {
  return async (dispatch) => {
    return Get(`/song/getAll`).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(fetchAllSongsSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchAllSongsFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestFetchAllListeners = (alert) => {
  return async (dispatch) => {
    return Get(`/listener/getAll`).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(fetchAllListenersSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchAllListenersFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestFetchSongSearch = (key, alert) => {
  return async (dispatch) => {
    const body = {
      keyword: key,
    };
    return Post(`/song/search`, body).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(fetchSongSearchSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchSongSearchFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestFetchSongGenre = (genre, alert) => {
  return async (dispatch) => {
    return Get(`/song/getAll/genre/${genre}`).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(fetchSongGenreSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchSongGenreFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestFetchListener = (id, alert) => {
  return async (dispatch) => {
    return Get(`/listener/get/${id}`).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(fetchListenerSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchListenerFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestFetchCurrentListener = (id, alert) => {
  return async (dispatch) => {
    return Get(`/listener/get/${id}`).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(fetchCurrentListenerSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(fetchCurrentListenerFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestLikeSong = (body, alert) => {
  return async (dispatch) => {
    return Post(`/listener/likeSong`, body).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(likeSongSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(likeSongFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};

export const requestLikeAlbum = (body, alert) => {
  return async (dispatch) => {
    return Post(`/listener/likeAlbum`, body).then((response) => {
      if (Success(response)) {
        response.json().then((data) => {
          dispatch(likeAlbumSuccess(data));
          if (alert) alert.info(data.message);
        });
      } else {
        response.json().then((data) => {
          dispatch(likeAlbumFail(data));
          if (alert) alert.error(data.message);
          console.log(data.error);
        });
      }
    });
  };
};
