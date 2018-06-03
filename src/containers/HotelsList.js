import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Text from 'leaf-ui/Text/web';

import { getHotelsData } from '../actions/hotels';
import { Flex, Layout } from '../styles';
import { ListCardItem } from '../components';

// ////////////////////////////////////////////////////////////

const propTypes = {
  getHotelsData: PropTypes.func.isRequired,
  hotels: PropTypes.shape({
    data: PropTypes.object.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

class HotelsList extends Component {
  static generateBaseUrl = match =>
    match.url.includes('hotels') ? match.url : `${match.url}hotels`;

  static generateDetailsPageUrl = (match, hotel) =>
    `${HotelsList.generateBaseUrl(match)}/treebo-${hotel.name.replace(/\s+/g, '-').toLowerCase()}-${
      hotel.id
    }`;

  static evalLowestPrice = ({ prices = [] }) => (prices.length > 0 ? prices[0][1] : null);

  componentDidMount() {
    this.props.getHotelsData();
  }

  navigateToDetailsPage = hotel => {
    const { match, history } = this.props;
    const detailsPageUrl = HotelsList.generateDetailsPageUrl(match, hotel);
    history.push(detailsPageUrl);
  };

  renderHotelsList = hotels => (
    <Flex display="flex" flexDirection="column" flex="1">
      {Object.keys(hotels.data).map(id => (
        <ListCardItem
          key={id}
          hotel={hotels.data[id] || {}}
          lowestPrice={HotelsList.evalLowestPrice(hotels.data[id] || {})}
          navigateToDetailsPage={this.navigateToDetailsPage}
          isLoading={hotels.isLoading}
        />
      ))}
    </Flex>
  );

  renderPageTitle = () => (
    <Helmet>
      <title>Top Rated Budget Hotel Chain in India</title>
    </Helmet>
  );

  renderLoader = () => <Text>. . .</Text>;

  render() {
    const { hotels } = this.props;
    return (
      <Fragment>
        {this.renderPageTitle()}
        <Layout padding="2rem 0">
          <Text size="xxl" weight="bold">
            Hotels
          </Text>
        </Layout>
        <Flex display="flex" justifyContent="center" alignItems="center">
          {this.renderHotelsList(hotels)}
        </Flex>
      </Fragment>
    );
  }
}

HotelsList.propTypes = propTypes;

const mapStateToProps = ({ hotels }) => ({
  hotels
});

const mapDispatchToProps = dispatch => bindActionCreators({ getHotelsData }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HotelsList)
);
