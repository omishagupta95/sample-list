import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getHotelsData, getHotelsDataIfNeeded, getHotelsMeta } from '../actions';

// ////////////////////////////////////////////////////////////

class HotelDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static _getHotelId({ hotelId: subRouteUrl }) {
    return subRouteUrl.substr(subRouteUrl.lastIndexOf('-') + 1);
  }

  componentDidMount() {
    const { match } = this.props;
    const hotelId = HotelDetails._getHotelId(match.params);
    this.props.getHotelsDataIfNeeded();
    this.props.getHotelsMeta();
  }

  render() {
    const { match, hotels, hotelsMeta } = this.props;
    const { data: hotelsData } = hotels;
    const { data: hotelsMetaData } = hotelsMeta;
    const hotelId = HotelDetails._getHotelId(match.params);
    const hotelData = hotelsData[hotelId];
    return (
      <div>
        <h2>{hotels.isLoading ? 'Loading hotels' : null}</h2>
        <h2>{hotelData ? (hotelData.id ? hotelData.id : null) : null}</h2>
        <h2>{hotelData ? (hotelData.name ? hotelData.name : null) : null}</h2>
        <h2>{hotelData ? (hotelData.price ? hotelData.price.oak : null) : null}</h2>
        <h2>{hotelsMeta.isLoading ? 'Loading meta' : null}</h2>
        <h2>
          {hotelsMetaData
            ? hotelsMetaData.essentials
              ? hotelsMetaData.essentials[0]
              : null
            : null}
        </h2>
      </div>
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
