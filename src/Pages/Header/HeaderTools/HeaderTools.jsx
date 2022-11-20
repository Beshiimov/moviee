import React from "react";
import s from "./HeaderTools.module.css";
import Notification from "./Tools/Notification";
import Setting from "./Tools/Setting";
import OnClickOutside from "../../GeneralComponents/OnClickOutside/OnClickOutside";
import { adultContent } from "../../../Redux/homePage-reducer";

class HeaderTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsOpen: false,
      notificationOpen: false,
      notification: false,
    };
    this.toDefaultState = this.toDefaultState.bind(this);
  }

  notificationOpen = () =>
    this.setState({
      notificationOpen: true,
      settingsOpen: false,
    });

  settingsOpen = () =>
    this.setState({
      notificationOpen: false,
      settingsOpen: true,
    });

  toDefaultState = () => {
    this.setState({
      settingsOpen: false,
      notificationOpen: false,
    });
  };

  render() {
    return (
      <OnClickOutside toDefaultState={this.toDefaultState}>
        <div className={s.buttons}>
          <Notification
            notificationOpen={this.notificationOpen}
            notification={this.state.notification}
            isOpen={this.state.notificationOpen}
            toDefaultState={this.toDefaultState}
          />

          <Setting
            settingsOpen={this.settingsOpen}
            isOpen={this.state.settingsOpen}
            toDefaultState={this.toDefaultState}
            adultContentToggle={this.props.adultContent}
            adultContent={this.props.adult}
          />
        </div>
      </OnClickOutside>
    );
  }
}

export default HeaderTools;
