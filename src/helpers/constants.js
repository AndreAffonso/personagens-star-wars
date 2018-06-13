export const FETCH_URL = 'https://swapi.co/api/people/';

export const FETCH_NEXT_PAGE = pageNumber =>
  `https://swapi.co/api/people/?page=${pageNumber}`;
