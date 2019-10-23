import PropTypes from "prop-types";
import styled from "styled-components";
import { Card } from "semantic-ui-react";

var backgroundColor = [
  "linear-gradient(323.35deg, #736DFF 6.2%, #A97FFF 100%)",
  "linear-gradient(323.35deg, #F7C598 6.2%, #FF8886 97.74%)",
  "linear-gradient(147.2deg, #F9B4BD 0%, #9573DB 100%)",
  "linear-gradient(146.29deg, #44DEC5 9.19%, #4EBCFA 100%);"
];
var boxShadow = [
  "0px 10px 9px rgba(83,97,255,0.3)",
  "0px 10px 9px rgba(255,141,136,0.3)",
  "0px 10px 9px rgba(159,121,217,0.3)",
  "0px 10px 9px rgba(73,203,226,0.3)"
];
const ColoredCard = styled(Card)`
  &.ui.card {
    background: ${props => backgroundColor[props.type - 1]};
    box-shadow: ${props => boxShadow[props.type - 1]};
    border-radius: 8px;
  }
  &.ui.card > .content {
    padding: 20px;
    border-top: 1px solid rgba(221, 225, 238, 0.5);
  }
  &.ui.card > .content.extraCard {
    min-height: 120px;
  }
`;
ColoredCard.propTypes = {
  type: PropTypes.number.isRequired // 1: blue, 2: red, 3: purple, 4: green
};

export default ColoredCard;
