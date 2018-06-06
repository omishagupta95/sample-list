import styled from 'styled-components';

export { ListCard, ListButton } from './List';
export { DetailsCardContainer, PriceCardOriginal, SoldOutStyler } from './Details';

// ////////////////////////////////////////////////////////////

export const AppContainer = styled.div`
  padding: 5% 15%;
`;

export const Layout = styled.div`
  padding: ${props => (props.padding ? props.padding : '')};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '')};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : '')};
  padding-right: ${props => (props.paddingRight ? props.padding : '')};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : '')};
  margin: ${props => (props.margin ? props.margin : '')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
  margin-right: ${props => (props.marginRight ? props.margin : '')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '')};
  width: ${props => (props.width ? props.width : '')};
  height: ${props => (props.height ? props.height : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
`;

export const Flex = Layout.extend`
  align-content: ${props => (props.alignContent ? props.alignContent : '')};
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  align-self: ${props => (props.alignSelf ? props.alignSelf : '')};
  display: ${props => (props.display ? props.display : '')};
  flex-basis: ${props => (props.flexBasis ? props.flexBasis : '')};
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : '')};
  flex-shrink: ${props => (props.flexShrink ? props.flexShrink : '')};
  flex-wrap: ${props => (props.flexWrap ? props.flexWrap : '')};
  flex: ${props => (props.flex ? props.flex : '')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  order: ${props => (props.order ? props.order : '')};
`;
