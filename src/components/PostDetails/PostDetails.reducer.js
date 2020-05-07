export const POST_DETAILS_INIT_STATE = {
  data: {},
  isLoading: false,
  isError: false,
};

export const POST_DETAILS_ACTION_TYPES = {
  SET_LOADING: "SET_LOADING",
  SET_DATA: "SET_DATA",
  SET_ERROR: "ERROR",
};

export const PostDetailReducer = (state, action) => {
  switch (action.type) {
    case POST_DETAILS_ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case POST_DETAILS_ACTION_TYPES.SET_DATA:
      return {
        isLoading: false,
        isError: false,
        data: action.value,
      };
    case POST_DETAILS_ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      throw new Error(`Action type unknown`);
  }
};
