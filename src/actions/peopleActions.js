import { FETCH_PEOPLE, FETCH_NEW_PAGE } from './types';

export const fetchPeople = fetchUrl => dispatch => {
  fetch(fetchUrl)
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_PEOPLE,
        payload: posts.results
      })
    );
};

export const fetchNewPage = fetchUrl => dispatch => {
  fetch(fetchUrl)
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_NEW_PAGE,
        payload: posts.results
      })
    );
};
