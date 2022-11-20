import { connect } from "react-redux";
import Header from "./Header";
import {
  cleanStore,
  updateData,
  updateSearchText,
} from "../../Redux/search-reducer";

const mapStateToProps = (state) => {
  return {
    adult: state.searchReducer.adult,
    searchText: state.searchReducer.searchText,
  };
};

const mapDispatchToProps = {
  updateSearchText,
  updateData,
  cleanStore,
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
