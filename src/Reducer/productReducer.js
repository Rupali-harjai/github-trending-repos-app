export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_REPOS": {
      return {
        ...state,
        hits: action.payload.hits,
      };
    }
  }

  return state;
};
