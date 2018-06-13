import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

// COMPONENTS
import PeopleList from '../../components/PeopleList';

import { AppWrapper, Title } from './styles';

const App = () => (
  <Provider store={store}>
    <AppWrapper>
      <Title>Star Wars Characters</Title>
      <PeopleList />
    </AppWrapper>
  </Provider>
);

export default App;
