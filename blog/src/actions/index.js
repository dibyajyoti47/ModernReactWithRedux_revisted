import _ from "lodash";
import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(userId => {
    dispatch(fetchUser(userId));
  });
};

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonplaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};

export const fetchUser = id => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

/*  using memoize
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});

*/
