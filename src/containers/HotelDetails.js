import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { getHotelsData, getHotelsDataIfNeeded, getHotelsMeta } from '../actions';

// ////////////////////////////////////////////////////////////

class HotelDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static _getHotelId = ({ hotelId: subRouteUrl }) =>
    subRouteUrl.substr(subRouteUrl.lastIndexOf('-') + 1);

  static _generatePageTitle = hotel =>
    `${hotel.name}, ${hotel.city} | ${
      hotel.prices.length > 0 ? `Tariff ₹${hotel.prices[0][1]},` : ''
    } Lowest Price @GitHub.com`;

  componentDidMount() {
    this.props.getHotelsDataIfNeeded();
    this.props.getHotelsMeta();
  }

  render() {
    const { match, hotels, hotelsMeta } = this.props;
    const { data: hotelsData } = hotels;
    const { data: hotelsMetaData } = hotelsMeta;
    const hotelId = HotelDetails._getHotelId(match.params);
    const hotelData = hotelsData[hotelId];
    if (!hotelData || !hotelData.prices) return null;
    return (
      <React.Fragment>
        <Helmet>
          <title>{HotelDetails._generatePageTitle(hotelData)}</title>
        </Helmet>
        <h2>{hotels.isLoading ? 'Loading hotels' : null}</h2>
        <h2>{hotelData ? (hotelData.id ? hotelData.id : null) : null}</h2>
        <h2>{hotelData ? (hotelData.name ? hotelData.name : null) : null}</h2>
        <h2>
          {hotelData
            ? hotelData.prices
              ? hotelData.prices.length > 0
                ? hotelData.prices[0][1]
                : null
              : null
            : null}
        </h2>
        <h2>{hotelsMeta.isLoading ? 'Loading meta' : null}</h2>
        <h2>
          {hotelsMetaData
            ? hotelsMetaData.essentials
              ? hotelsMetaData.essentials[0]
              : null
            : null}
        </h2>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    hotels: state.hotels,
    hotelsMeta: state.hotelsMeta
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getHotelsData, getHotelsDataIfNeeded, getHotelsMeta }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelDetails);
