import styled from 'styled-components';
import Card from 'leaf-ui/Card/web';
import Text from 'leaf-ui/Text/web';

export const DetailsCardContainer = styled(Card)`
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const PriceCardOriginal = styled(Text)`
  text-decoration: line-through;
  padding-right: 0.35rem;
  padding-bottom: 0.5rem;
`;

export const SoldOutStyler = styled.div`
  opacity: ${props => (props.soldOut ? 0.3 : '')};
`;
