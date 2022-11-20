import { cleanHistoryAction } from "../../Redux/library-reducer";
import { connect } from "react-redux";
import Library from "./Library";

const mapStateToProps = (state) => {
  return {
    watchList: state.libraryReducer.watchList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // cleanHistory: () => {
    //   dispatch(cleanHistoryAction())
    // }
  };
};

const LibraryContainer = connect(mapStateToProps, mapDispatchToProps)(Library);
export default LibraryContainer;
