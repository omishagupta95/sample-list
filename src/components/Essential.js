import React from 'react';
import PropTypes from 'prop-types';
import Text from 'leaf-ui/Text/web';

import { getEssentialsImageUrl } from '../config';
import { Flex, Layout } from '../styles';

// ////////////////////////////////////////////////////////////

const propTypes = {
  name: PropTypes.string
};

const defaultProps = {
  name: ''
};

const Essential = ({ name }) => (
  <Flex display="flex" flexDirection="column" justifyContent="space-between" padding="1rem 2rem">
    <img src={getEssentialsImageUrl(name)} alt="hotel-essential" />
    <Layout paddingTop="0.3rem">
      <Text>{name} </Text>
    </Layout>
  </Flex>
);

Essential.propTypes = propTypes;
Essential.defaultProps = defaultProps;

export default Essential;
