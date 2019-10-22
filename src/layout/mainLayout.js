import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";

import { Responsive, Segment, Menu, Sidebar } from "semantic-ui-react";

import { RouteWithSubRoutes } from "routes.config";
import { Icon } from "components";

import Navbar from "./navBar";
import {
  SideBarSubHead,
  SideBarText,
  SideBarSection,
  SideBarItem
} from "./sideBar";

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileSize: false,
      visibleSideMenu: false,
      activeItem: "delivery"
    };
  }

  updateWidth = () => {
    const isSSR = typeof window === "undefined";
    const width = isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
    // const minWidth = Responsive.onlyTablet.minWidth;
    const minWidth = 890;
    if (width < minWidth) this.setState({ isMobileSize: true });
    else this.setState({ isMobileSize: false });
    // this.handleSideMenuVisible(false);
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
    // const { match, location } = this.props;
    // // console.log(match, location);
    // var pathArr = location.pathname.split("/");
    // var name = pathArr[pathArr.length - 1];
    // this.setState({ activeItem: name });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  handleSideMenuVisible = visible => {
    this.setState({ visibleSideMenu: visible });
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { isMobileSize, visibleSideMenu, activeItem } = this.state;
    const { routes } = this.props;

    // console.log(match, location);
    var sign = [
      {
        name: "dashboard",
        content: "Dashboard"
      },
      {
        name: "setting",
        content: "Settings"
      },
      {
        name: "user",
        content: "Users"
      },
      {
        name: "delivery",
        content: "Delivery"
      },
      {
        name: "api",
        content: "OneSignal API"
      }
    ];

    var concepts = [
      {
        name: "prompt",
        content: "Prompting"
      },
      {
        name: "notification",
        content: "Notification Appearance"
      },
      {
        name: "message-personal",
        content: "Message Personalization"
      },
      {
        name: "playerId",
        content: "Player ID"
      },
      {
        name: "behavior",
        content: "Notification Behavior"
      }
    ];
    return (
      <React.Fragment>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation={isMobileSize ? "overlay" : "push"}
            direction="left"
            // secondary={isMobileSize ? false : true}
            onHide={() => this.handleSideMenuVisible(false)}
            vertical
            visible={(visibleSideMenu && isMobileSize) || !isMobileSize}
          >
            <SideBarSection>
              <SideBarSubHead>Usign Onesignal</SideBarSubHead>
              {sign.map((item, i) => (
                <SideBarItem
                  key={i}
                  active={activeItem === item.name}
                  name={item.name}
                  onClick={this.handleItemClick}
                >
                  <Icon name={item.name} />
                  <SideBarText>{item.content}</SideBarText>
                </SideBarItem>
              ))}
            </SideBarSection>
            <SideBarSection>
              <SideBarSubHead>Concepts</SideBarSubHead>
              {concepts.map((item, i) => (
                <SideBarItem
                  key={i}
                  active={activeItem === item.name}
                  name={item.name}
                  onClick={this.handleItemClick}
                >
                  <Icon name={item.name} />
                  <SideBarText>{item.content}</SideBarText>
                </SideBarItem>
              ))}
            </SideBarSection>
          </Sidebar>
          <Sidebar.Pusher dimmed={false}>
            <Segment
              basic
              style={{
                marginRight: isMobileSize ? 0 : 280,
                border: "none",
                height: "100vh",
                padding: 0,
                paddingTop: isMobileSize ? "60px" : "70px"
              }}
            >
              <Navbar
                isMobileSize={isMobileSize}
                visibleSideMenu={visibleSideMenu}
                handleSideMenuVisible={this.handleSideMenuVisible}
              />
              {routes && (
                <Switch>
                  {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))}
                </Switch>
              )}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </React.Fragment>
    );
  }
}

MainLayout.propTypes = {
  routes: PropTypes.array,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default MainLayout;
