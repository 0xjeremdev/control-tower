import styled from "styled-components";
import { Input } from "semantic-ui-react";
export const SearchInput = styled(Input)`
  ::placeholder {
    color: #9ea5bd;
  }
  &.ui.transparent.input > input {
    padding-left: 10px;
    font-family: "Proxima Nova";
    font-size: 16px;
    line-height: 24px;
    color: #222222;
  }
  &.ui.transparent.input {
    padding-left: 20px;
  }
`;
