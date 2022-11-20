import React, { createRef } from "react";
import s from "../Header.module.css";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { Link } from "react-router-dom";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.linkRef = React.createRef();
    this.searchValue = createRef();
  }

  updateSearchText = () => {
    const text = this.searchValue.current.value;
    this.props.updateSearchText(text);
  };

  clickSearchBtn = (e) => {
    if (this.props.searchText.length > 0 || e.keyCode === "Enter") {
      this.props.sendRequest();
    }
  };

  pressEnterBtn = (e) => {
    if (e.charCode === 13 || e.keyCode === 13) {
      this.clickSearchBtn();
      this.linkRef.current.click();
    }
  };

  render() {
    return (
      <label className={s.inputBox}>
        <input
          type="text"
          className={s.search}
          value={this.props.searchText}
          ref={this.searchValue}
          onChange={this.updateSearchText}
          placeholder="Поиск Фильмов"
          onKeyDown={this.pressEnterBtn}
          autoFocus
        />
        <Link
          to="/search"
          onClick={this.clickSearchBtn}
          className={s.searchBtn}
          ref={this.linkRef}
        >
          <SearchIcon />
        </Link>
      </label>
    );
  }
}

export default Searchbar;
