import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";

import { Icon, SearchInput } from "components";

import UserImage from "assets/images/user.png";

import {
  NavItem,
  NavIcon,
  NavImage,
  NavSpan,
  NavBar,
  NavContainer
} from "./components";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  NavMenu = () => {
    return (
      <React.Fragment>
        <Menu.Menu position="left">
          <NavItem>
            <Icon name="search" />
            <SearchInput transparent placeholder="Type in to search" />
          </NavItem>
        </Menu.Menu>
        <Menu.Menu position="right">
          <NavSpan>Cloud Four – Productions</NavSpan>
          <NavItem>
            <NavImage src={UserImage} />
            <Icon name="down-arrow-grey" style={{ marginLeft: "5px" }} />
          </NavItem>
        </Menu.Menu>
      </React.Fragment>
    );
  };

  MobileNav = visibleSide => {
    const { handleSideMenuVisible } = this.props;

    return (
      <React.Fragment>
        <NavBar fixed={"top"} mobile="true" size="large">
          <NavContainer>
            <NavItem onClick={() => handleSideMenuVisible(!visibleSide)}>
              {visibleSide ? (
                <NavIcon name="close" />
              ) : (
                <NavIcon name="hamburger" />
              )}
            </NavItem>
            <NavItem>
              <NavImage src={UserImage} />
              <Icon name="down-arrow-grey" style={{ marginLeft: "5px" }} />
            </NavItem>
          </NavContainer>
        </NavBar>
      </React.Fragment>
    );
  };

  DesktopNav = () => {
    return (
      <NavBar fixed={"top"} size="large">
        <NavContainer style={{ width: "calc(100vw - 280px" }}>
          {this.NavMenu()}
        </NavContainer>
      </NavBar>
    );
  };

  render() {
    const { isMobileSize, visibleSideMenu } = this.props;

    return (
      <React.Fragment>
        {isMobileSize ? this.MobileNav(visibleSideMenu) : this.DesktopNav()}
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  isMobileSize: PropTypes.bool.isRequired,
  visibleSideMenu: PropTypes.bool.isRequired,
  handleSideMenuVisible: PropTypes.func.isRequired
};

export default Navbar;
