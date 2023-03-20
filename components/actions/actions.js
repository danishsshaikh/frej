import axios from "axios";

export const FETCH_LIST_DATA_REQUEST = "FETCH_LIST_DATA_REQUEST";
export const FETCH_LIST_DATA_SUCCESS = "FETCH_LIST_DATA_SUCCESS";
export const FETCH_LIST_DATA_FAILURE = "FETCH_LIST_DATA_FAILURE";

export const fetchListData = (page = 1, limit = 10) => {
  return (dispatch) => {
    dispatch({ type: FETCH_LIST_DATA_REQUEST });

    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
      )
      .then((response) => {
        dispatch({
          type: FETCH_LIST_DATA_SUCCESS,
          payload: response.data,
          page: page,
        });
      })
      .catch((error) => {
        dispatch({ type: FETCH_LIST_DATA_FAILURE });
      });
  };
};
