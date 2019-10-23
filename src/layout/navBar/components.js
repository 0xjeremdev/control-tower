import { Menu } from "semantic-ui-react";
import styled from "styled-components";
import { Icon } from "components";

export const NavItem = styled(Menu.Item)`
  .ui.menu &.item {
    border-left: none !important;
  }

  .ui.menu.vertical &.item {
    display: flex;
    align-items: center;
  }

  .ui.menu.vertical.sidebar_grey &.item {
    padding-bottom: 0;
    padding-top: 0;
  }

  .ui.menu &.item.mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .ui.menu &.item:before {
    width: 0px;
  }
`;

export const NavIcon = styled(Icon)`
  width: 40px;
  height: 40px;
  padding: 12px;
  border-radius: 0.3125em;
`;

export const NavImage = styled.img`
  .ui.menu .item > &:not(.ui) {
    width: 40px;
    height: 40px;
    border-radius: 0.3125em;
  }
`;

export const NavSpan = styled(Menu.Item)`
  .ui.menu &.item {
    border-left: 1px solid #dde1ee;
    border-right: 1px solid #dde1ee;
    border-bottom: none;
    font-family: "Proxima Nova";
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #9ea5bd;
  }

  .ui.menu.vertical &.item {
    display: flex;
    align-items: center;
  }

  .ui.menu.vertical.sidebar_grey &.item {
    padding-bottom: 0;
    padding-top: 0;
  }

  .ui.menu &.item.mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .ui.menu &.item:before {
    width: 0px;
  }
`;

export const NavBar = styled(Menu)`
  box-shadow: unset !important;
  border-bottom: none;
  height: ${props => (props.mobile ? "60px" : "70px")};
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  /* flex-wrap: wrap; */
  padding: 0 10px;
  justify-content: space-between;
`;
