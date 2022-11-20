import { connect } from "react-redux";
import Search from "./Search";
import { updateData } from "../../Redux/search-reducer";

const mapStateToProps = (state) => {
  return {
    data: state.searchReducer.results,
    adult: state.searchReducer.adult,
    page: state.searchReducer.page,
    loading: state.searchReducer.loading,
    totalPages: state.searchReducer.total_pages,
    totalResults: state.searchReducer.total_results,
    searchText: state.searchReducer.searchText,
  };
};

const SearchContainer = connect(mapStateToProps, { updateData })(Search);

export default SearchContainer;
