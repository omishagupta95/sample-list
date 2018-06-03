import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HotelsList from '../containers/HotelsList';
import HotelDetails from '../containers/HotelDetails';

// ////////////////////////////////////////////////////////////

const Hotels = ({ match }) => (
  <div>
    <Route path={`${match.path}/:hotelId`} component={HotelDetails} />
    <Route exact path={match.path} component={HotelsList} />
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/hotels">Home</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Hotels} />
      <Route path="/hotels" component={Hotels} />
      {/* <Redirect from="/" to="/hotels" /> */}
    </div>
  </Router>
);
export default BasicExample;
