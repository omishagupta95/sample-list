import React from 'react';
import PropTypes from 'prop-types';
import Text from 'leaf-ui/Text/web';

import { Flex, Layout } from '../styles';

// ////////////////////////////////////////////////////////////

const propTypes = {
  head: PropTypes.string.isRequired,
  subhead: PropTypes.string
};

const defaultProps = {
  subhead: ''
};

const Policy = ({ head, subhead }) => (
  <Flex display="flex">
    <Flex display="flex" flexDirection="column" padding="1.5rem 0">
      <Layout paddingBottom="0.5rem">
        <Text weight="bold" size="m" color="greyDark">
          {head}
        </Text>
      </Layout>
      <Text color="grey">{subhead || null}</Text>
    </Flex>
  </Flex>
);

Policy.propTypes = propTypes;
Policy.defaultProps = defaultProps;

export default Policy;
