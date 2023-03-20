import {
  FETCH_LIST_DATA_REQUEST,
  FETCH_LIST_DATA_SUCCESS,
  FETCH_LIST_DATA_FAILURE,
} from "../actions/actions";

const initialState = {
  listData: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_LIST_DATA_SUCCESS:
      return { ...state, listData: action.payload, loading: false };
    case FETCH_LIST_DATA_FAILURE:
      return { ...state, error: "Failed to fetch list data", loading: false };
    default:
      return state;
  }
};

export default rootReducer;
