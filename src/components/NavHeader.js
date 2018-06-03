import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Text from 'leaf-ui/Text/web';

import { Flex } from '../styles';

// ////////////////////////////////////////////////////////////

const propTypes = {
  name: PropTypes.string,
  isLoading: PropTypes.bool.isRequired
};

const defaultProps = {
  name: ''
};

const NavHeader = ({ isLoading, name }) => (
  <Flex display="flex" alignItems="center" padding="2rem 0">
    <Text size="xxl" weight="bold">
      <Link to="/hotels" style={{ textDecoration: 'none', color: '#5768e9' }}>
        Hotels /{' '}
      </Link>
      Treebo {!isLoading ? name : '. . .'}
    </Text>
  </Flex>
);

NavHeader.propTypes = propTypes;
NavHeader.defaultProps = defaultProps;

export default NavHeader;
