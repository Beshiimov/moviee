import HomePage from "./HomePage";
import {
  cleanStore,
  updateData,
  updatePage,
} from "../../Redux/homePage-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.homePageReducer.results,
    adult: state.homePageReducer.adult,
    page: state.homePageReducer.page,
    loading: state.homePageReducer.loading,
    totalPages: state.homePageReducer.total_pages,
  };
};

const mapDispatchToProps = {
  updateData,
  updatePage,
  cleanStore,
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
export default HomePageContainer;
