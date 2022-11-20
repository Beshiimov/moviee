import Cinema from "./Cinema";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { clearState, loadData } from "../../Redux/cinema-reducer";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

const mapStateToProps = (state) => {
  return {
    isLoad: state.cinemaReducer.isLoad,
    data: state.cinemaReducer.data,
  };
};

const mapDispatchToProps = {
  loadData,
  clearState,
};

const CinemaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Cinema));
export default CinemaContainer;
