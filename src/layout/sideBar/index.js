import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexInline, Text } from "components";
import { Menu } from "semantic-ui-react";

export const SideBarSubHead = styled(Text)`
  & {
    font-family: "Proxima Nova";
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #ffffff;
    padding: 5px 0 25px 40px;
  }
`;

export const SideBarText = styled(Text)`
  & {
    font-family: Proxima Nova;
    font-size: 13px;
    line-height: 24px;
    color: #ffffff;
    opacity: 0.7;
    margin-left: 10px;
  }
`;

export const SideBarSection = styled.div`
  & {
    margin: 0px;
    padding: 0px;
    margin-top: 100px;
  }
`;

const SideItem = styled(Menu.Item)`
  .ui.menu &.item {
    margin: 0px;
    padding: 7px 0 7px 40px;
    background: transparent;
    position: relative;
    border: transparent;
  }

  .ui.menu &.item:hover,
  .ui.menu &.item.active-item {
    background: rgba(255, 255, 255, 0.32);
    box-shadow: 0px 2px 5px rgba(83, 97, 255, 0.124802);
    cursor: pointer;
  }

  .ui.menu &.item:hover:before,
  .ui.menu &.item.active-item:before {
    display: block !important;
    position: absolute;
    background: #fff !important;
    content: "";
    width: 5px;
    height: 100%;
    left: 0px;
  }
`;

export const SideBarItem = ({ active, children }) => (
  <SideItem className={active ? "active-item" : ""}>
    <FlexInline>{children}</FlexInline>
  </SideItem>
);

SideBarItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node
};
