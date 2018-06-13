import styled, { css } from 'styled-components';

export const List = styled.div`
  padding: 2rem;
`;

export const ListItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0;
  transition: all 0.3s;
`;

export const SeeMoreButton = styled.button`
  background: #4b4b4c;
  color: white;
  font-weight: bold;
  border: 2px solid #4b4b4c;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 1rem 0;
  font-size: 16px;
  transition: all 0.4s;

  &:hover {
    background: white;
    color: #4b4b4c;
  }

  &:focus {
    outline: none;
  }
`;
