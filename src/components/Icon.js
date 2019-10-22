import React from "react";
import PropTypes from "prop-types";

import IconApi from "assets/icons/api.svg";
import IconBehavior from "assets/icons/behavior.svg";
import IconCompleted from "assets/icons/completed.svg";

import IconDashboard from "assets/icons/dashboard.svg";
import IconDelivery from "assets/icons/delivery.svg";
import IconDownArrowGrey from "assets/icons/down_arrow_grey.svg";
import IconDownArrowBlue from "assets/icons/down_arrow_blue.svg";
import IconPlayerID from "assets/icons/id.svg";
import IconMessagePersonal from "assets/icons/message_personal.svg";
import IconNotification from "assets/icons/notification.svg";
import IconPrompt from "assets/icons/prompt.svg";
import IconHamburger from "assets/icons/hamburger.svg";
import IconClose from "assets/icons/close.svg";

import IconSearch from "assets/icons/search.svg";
import IconSetting from "assets/icons/setting.svg";
import IconStart from "assets/icons/start.svg";
import IconStatus from "assets/icons/status.svg";
import IconTotalMessage from "assets/icons/total_message.svg";
import IconUser from "assets/icons/User.svg";

const Icon = ({ name, ...other }) => {
  var Icon = null;

  switch (name) {
    case "api":
      Icon = IconApi;
      break;
    case "behavior":
      Icon = IconBehavior;
      break;
    case "completed":
      Icon = IconCompleted;
      break;
    case "dashboard":
      Icon = IconDashboard;
      break;
    case "delivery":
      Icon = IconDelivery;
      break;
    case "down-arrow-blue":
      Icon = IconDownArrowBlue;
      break;
    case "down-arrow-grey":
      Icon = IconDownArrowGrey;
      break;
    case "playerId":
      Icon = IconPlayerID;
      break;
    case "message-personal":
      Icon = IconMessagePersonal;
      break;
    case "notification":
      Icon = IconNotification;
      break;
    case "prompt":
      Icon = IconPrompt;
      break;
    case "search":
      Icon = IconSearch;
      break;
    case "hamburger":
      Icon = IconHamburger;
      break;
    case "close":
      Icon = IconClose;
      break;
    case "setting":
      Icon = IconSetting;
      break;
    case "start":
      Icon = IconStart;
      break;
    case "status":
      Icon = IconStatus;
      break;
    case "total-message":
      Icon = IconTotalMessage;
      break;
    case "user":
      Icon = IconUser;
      break;
    default:
      return <div {...other} />;
  }

  return <Icon {...other} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
