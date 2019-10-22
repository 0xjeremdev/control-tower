import styled from "styled-components";

const Text = styled.div`
  & {
    font-family: "Proxima Nova";
    font-size: ${props => props.fontSize};
    line-height: ${props => `calc(${props.fontSize} * 1.3)`};
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    padding: 5px 0px;
  }

  @media only screen and (max-width: 648px) {
    & {
      font-size: ${props => `calc(${props.fontSize} / 1.2)`};
      line-height: ${props => `calc(${props.fontSize} / 1.2 * 1.3)`};
    }
  }

  @media only screen and (max-width: 476px) {
    & {
      font-size: ${props => `calc(${props.fontSize} / 1.5)`};
      line-height: ${props => `calc(${props.fontSize} / 1.5 * 1.3)`};
    }
  }
`;

Text.defaultProps = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "500",
  active: false
};

export default Text;
