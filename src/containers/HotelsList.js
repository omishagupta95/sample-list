import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getHotelsData } from '../actions/hotels';
import HotelCard from '../components/HotelCard';
import { ListContainer } from '../elements';

// ////////////////////////////////////////////////////////////

const propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

class HotelsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // static getDerivedStateFromProps(nextProps) {
  //   return null;
  // }

  static _generateDetailsPageUrl = (match, hotel) =>
    `${match.url}/${hotel.name.replace(/\s+/g, '-').toLowerCase()}-${hotel.id}`;

  static _evalLowestPrice = ({ price }) => {
    if (!price) return null;
    let lowestPriceRoomKey = null;
    Object.keys(price).forEach(roomKey => {
      if (!lowestPriceRoomKey) {
        lowestPriceRoomKey = price[roomKey];
      } else if (price[roomKey] < price[lowestPriceRoomKey]) {
        lowestPriceRoomKey = roomKey;
      }
    });
    return lowestPriceRoomKey;
  };

  componentDidMount() {
    this.props.getHotelsData();
  }

  _renderHotelsList = hotels => (
    <ListContainer>
      {Object.keys(hotels).map(id => (
        <HotelCard
          key={id}
          hotel={hotels[id]}
          lowestPrice={HotelsList._evalLowestPrice(hotels[id])}
          navigateToDetailsPage={this.navigateToDetailsPage}
        />
      ))}
    </ListContainer>
  );

  navigateToDetailsPage = hotel => {
    const { match, history } = this.props;
    const detailsPageUrl = HotelsList._generateDetailsPageUrl(match, hotel);
    history.push(detailsPageUrl);
  };

  render() {
    const { hotels } = this.props;
    return (
      <React.Fragment>
        <h2>Hotels</h2>
        <h2>{hotels.isLoading ? 'Loading hotels' : null}</h2>
        {this._renderHotelsList(hotels.data)}
      </React.Fragment>
    );
  }
}

HotelsList.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    hotels: state.hotels
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getHotelsData }, dispatch);
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HotelsList)
);
