import React from 'react';
import { Link } from 'react-router-dom';
import Text from 'leaf-ui/Text/web';

import { ListCard, Flex, Layout } from '../styles';

// ////////////////////////////////////////////////////////////

const SoldOut = () => (
  <ListCard opacity="1">
    <Flex
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="2rem"
    >
      <Text size="xl">
        Sold Out{' '}
        <span role="img" aria-label="crying-face">
          😭
        </span>
      </Text>
      <Layout paddingTop="1.5rem">
        <Text size="s" weight="bold">
          <Link to="/hotels" style={{ textDecoration: 'none', color: '#5768e9' }}>
            CHECK OTHER HOTELS
          </Link>
        </Text>
      </Layout>
    </Flex>
  </ListCard>
);

export default SoldOut;
