import styled from 'styled-components';
import Card from 'leaf-ui/Card/web';
import Button from 'leaf-ui/Button/web';

export const ListCard = styled(Card)`
  padding: 2rem;
  margin-bottom: 1rem;
  min-height: ${props => (props.fixed ? '12rem' : '')};
`;

export const ListButton = styled(Button)`
  height: 3rem;
`;
