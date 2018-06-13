import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPeople, fetchNewPage } from '../../actions/peopleActions';
import { compose, withState, withHandlers } from 'recompose';

// CONSTANTS
import { FETCH_URL, FETCH_NEXT_PAGE } from '../../helpers/constants';

import { List, ListItem, SeeMoreButton } from './styles';

class PeopleList extends PureComponent {
  componentWillMount() {
    this.props.fetchPeople(FETCH_URL);
  }

  onNewPage = () => {
    this.props.fetchNewPage(FETCH_NEXT_PAGE(this.props.pageNumber));
    this.props.handleClick();
  };

  render() {
    const peopleItems = this.props.people.map(people => (
      <ListItem key={people.name}>
        <h2>{people.name}</h2>
        <h4>Ano de nascimento: {people.birth_year}</h4>
        <h4>Cor dos olhos: {people.eye_color}</h4>
        <h4>Gênero: {people.male}</h4>
        <h4>Massa: {people.mass}</h4>
        <h4>Cor da pele: {people.skin_color}</h4>
      </ListItem>
    ));
    return (
      <List>
        {peopleItems}
        {console.log(this.props.people)}
        {this.props.pageNumber < 9 && (
          <SeeMoreButton onClick={this.onNewPage}>Ver mais</SeeMoreButton>
        )}
      </List>
    );
  }
}

PeopleList.propTypes = {
  fetchPeople: PropTypes.func.isRequired,
  fetchNewPage: PropTypes.func,
  people: PropTypes.array.isRequired,
  pageNumber: PropTypes.number,
  handleClick: PropTypes.func
};

const enhance = compose(
  withState('pageNumber', 'onNextPage', 2),
  withHandlers({
    handleClick: props => event =>
      props.onNextPage(
        props.pageNumber < 9 ? props.pageNumber + 1 : props.pageNumber
      )
  })
);

const mapStateToProps = state => ({
  people: state.posts.items
});

export default enhance(
  connect(
    mapStateToProps,
    { fetchPeople, fetchNewPage }
  )(PeopleList)
);
