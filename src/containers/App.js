import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HotelsList from '../containers/HotelsList';
import HotelDetails from '../containers/HotelDetails';
import { AppContainer } from '../styles';

// ////////////////////////////////////////////////////////////

const Hotels = ({ match }) => (
  <Fragment>
    <Route path={`${match.path}/:hotelId`} component={HotelDetails} />
    <Route exact path={match.path} component={HotelsList} />
  </Fragment>
);

Hotels.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
};

const BasicExample = () => (
  <Router>
    <Fragment>
      <AppContainer>
        <Route exact path="/" component={Hotels} />
        <Route path="/hotels" component={Hotels} />
        {/* <Redirect from="/" to="/hotels" /> */}
      </AppContainer>
    </Fragment>
  </Router>
);

export default BasicExample;
