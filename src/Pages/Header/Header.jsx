import React from "react";
import s from "./Header.module.css";
import HeaderToolsContainer from "./HeaderTools/HeaderToolsContainer";
import Searchbar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";
import searchRequest from "../../requests/searchRequest";

class Header extends React.Component {
  request = () => {
    // this.props.cleanStore();
    searchRequest(this.props.searchText, this.props.adult).then((data) =>
      this.props.updateData(data)
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <div className={s.header}>
        <div className={s.headerRow}>
          <Logo />
          <Searchbar
            updateSearchText={this.props.updateSearchText}
            searchText={this.props.searchText}
            sendRequest={this.request}
          />
          <HeaderToolsContainer />
        </div>
      </div>
    );
  }
}

export default Header;
