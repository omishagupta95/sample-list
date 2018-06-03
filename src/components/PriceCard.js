import React from 'react';
import PropTypes from 'prop-types';
import Text from 'leaf-ui/Text/web';
import Link from 'leaf-ui/Link/web';
import Tooltip from 'leaf-ui/Tooltip/web';

import { ListCard, Flex, Layout, ListButton, PriceCardOriginal } from '../styles';

// ////////////////////////////////////////////////////////////

const propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

const PriceCard = ({ type, price, index }) => (
  <ListCard borderColor="greyLighter" backgroundColor={`${index === 0 ? 'greenLighter' : 'white'}`}>
    <Flex display="flex" justifyContent="space-between">
      <Flex display="flex" flexDirection="column" justifyContent="center">
        <Layout paddingBottom="1rem">
          <Text size="xl" weight="bold">
            {type.toUpperCase()}
          </Text>
        </Layout>
        <Layout paddingBottom="0.2rem">
          <Text size="s" color="yellowLight">
            Non-Refundable
          </Text>
        </Layout>
        <Layout paddingBottom="0.2rem">
          <Text size="xxl" weight="semibold">
            ₹{price}
          </Text>
        </Layout>
        <Flex display="flex" flexDirection="column">
          <Flex display="flex" flexDirection="row">
            <PriceCardOriginal size="s" color="greyDarker">
              ₹5604
            </PriceCardOriginal>
            <Text color="green" size="s">
              69% off
            </Text>
          </Flex>
        </Flex>
        <Text size="s" color="grey">
          Inclusive of all taxes
        </Text>
      </Flex>
      <Flex display="flex" flexDirection="column" justifyContent="center">
        <Link href="https://github.com/dhruvdutt" target="_blank">
          <Tooltip placement="bottom">
            <Tooltip.Trigger>
              <ListButton>Book Now</ListButton>
            </Tooltip.Trigger>
            <Tooltip.Content>
              Hire Me{' '}
              <span role="img" aria-label="grin-face">
                😁
              </span>
            </Tooltip.Content>
          </Tooltip>
        </Link>
      </Flex>
    </Flex>
  </ListCard>
);

PriceCard.propTypes = propTypes;

export default PriceCard;
