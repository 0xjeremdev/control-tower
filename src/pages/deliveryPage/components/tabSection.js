import React, { Component } from "react";
import styled from "styled-components";
import { Menu } from "semantic-ui-react";
import { Text } from "components";

const Section = styled.div`
  border-bottom: 2px solid #dde1ee;
`;
const TabBar = styled(Menu)`
  &.ui.menu {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
`;
const TabButton = styled(Menu.Item)`
  .ui.menu &.item {
    font-family: "Proxima Nova";
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    color: ${props => (props.selected ? "#333D5F" : "#9EA5BD")};
    border-bottom: ${props => (props.selected ? "4px solid #5361FF" : "none")};
  }
  .ui.menu &::before,
  .ui.menu &.item::before {
    display: none;
  }
`;

class TabSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "hour"
    };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Section>
        <TabBar position="right" width="">
          <Text fontSize="24px" color="#333D5F" fontWeight="500">
            Upload your data
          </Text>
          <Menu.Menu position="right">
            <TabButton
              name="second"
              selected={activeItem === "second"}
              onClick={this.handleItemClick}
            >
              Last 120 seconds
            </TabButton>
            <TabButton
              name="minute"
              selected={activeItem === "minute"}
              onClick={this.handleItemClick}
            >
              Last 30 minutes
            </TabButton>
            <TabButton
              name="hour"
              selected={activeItem === "hour"}
              onClick={this.handleItemClick}
            >
              Last 24 hours
            </TabButton>
            <TabButton
              name="day"
              selected={activeItem === "day"}
              onClick={this.handleItemClick}
            >
              Last 5 days
            </TabButton>
          </Menu.Menu>
        </TabBar>
      </Section>
    );
  }
}

export default TabSection;
