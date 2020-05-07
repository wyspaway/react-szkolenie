export const POST_DETAILS_INIT_STATE = {
  data: {},
  isLoading: false,
};

export const POST_DETAILS_ACTION_TYPES = {
  SET_LOADING: "SET_LOADING",
  SET_DATA: "SET_DATA",
};

export const PostDetailReducer = (state, action) => {
  switch (action.type) {
    case POST_DETAILS_ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case POST_DETAILS_ACTION_TYPES.SET_DATA:
      return {
        isLoading: false,
        data: action.value,
      };

    default:
      throw new Error(`Action type unknown`);
  }
};
