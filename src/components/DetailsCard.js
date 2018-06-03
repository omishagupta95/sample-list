import React from 'react';
import PropTypes from 'prop-types';
import Text from 'leaf-ui/Text/web';

import { DetailsCardContainer, Flex, SoldOutStyler } from '../styles';

// ////////////////////////////////////////////////////////////

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  soldOut: PropTypes.bool,
  children: PropTypes.any
};

const defaultProps = {
  subtitle: null,
  soldOut: false,
  children: null
};

const DetailsCard = ({ title, subtitle, soldOut, children }) => (
  <DetailsCardContainer>
    <Flex display="flex" flexDirection="column">
      <SoldOutStyler soldOut={soldOut}>
        <Flex display="flex" paddingBottom={`${subtitle ? '0.75rem' : '1.2rem'}`}>
          <Text size="xl" weight="bold">
            {title.toUpperCase()}
          </Text>
        </Flex>
        {subtitle ? (
          <Flex display="flex" paddingBottom="0.6rem">
            <Text weight="bold" color="grey">
              {subtitle}
            </Text>
          </Flex>
        ) : null}
      </SoldOutStyler>
      {children || null}
    </Flex>
  </DetailsCardContainer>
);

DetailsCard.propTypes = propTypes;
DetailsCard.defaultProps = defaultProps;

export default DetailsCard;
