import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Text from 'leaf-ui/Text/web';
import Link from 'leaf-ui/Link/web';

import { ListCard, ListButton, Flex, Layout } from '../styles';

// ////////////////////////////////////////////////////////////

const propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    locality: PropTypes.string
  }).isRequired,
  navigateToDetailsPage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  lowestPrice: PropTypes.number
};

const defaultProps = {
  lowestPrice: null
};

const ListCardItem = ({ isLoading, hotel, lowestPrice, navigateToDetailsPage }) => {
  const renderLocality = ({ city, locality }) => (locality ? `${locality}, ${city}` : city);

  const renderLowestPrice = () =>
    !isLoading && lowestPrice ? (
      <Fragment>
        <Text weight="bold" size="xxl">
          ₹{lowestPrice}
        </Text>
        <Text size="xs" color="grey">
          Tax incl. price for 1 night
        </Text>
      </Fragment>
    ) : (
      <Text color="red" size="l">
        SOLD OUT
      </Text>
    );

  const renderButton = () =>
    !isLoading && lowestPrice ? (
      <ListButton onClick={() => navigateToDetailsPage(hotel)}>
        {/* <Icon name="book" left> */}
        <Text>Quick Book</Text>
        {/* </Icon> */}
      </ListButton>
    ) : null;

  return (
    <ListCard fixed="true">
      <Flex display="flex" flexDirection="column">
        <Flex display="flex" justifyContent="space-between">
          <Flex display="flex" flexDirection="column">
            <Link onClick={() => navigateToDetailsPage(hotel)}>
              <Text size="xxl" weight="bold">
                Treebo {!isLoading ? hotel.name : '. . .'}
              </Text>
            </Link>
            <Layout padding="0.3rem 0">
              <Text color="grey">{!isLoading ? renderLocality(hotel) : '. . . . .'}</Text>
            </Layout>
          </Flex>
          <Flex display="flex" flexDirection="column" alignItems="flex-end">
            {renderLowestPrice(hotel)}
          </Flex>
        </Flex>
        <Flex display="flex" justifyContent="flex-end" paddingTop="1rem">
          {renderButton()}
        </Flex>
      </Flex>
    </ListCard>
  );
};

ListCardItem.defaultProps = defaultProps;
ListCardItem.propTypes = propTypes;

export default ListCardItem;
