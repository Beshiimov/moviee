import { connect } from "react-redux";
import HeaderTools from "./HeaderTools";
import { adultContent } from "../../../Redux/homePage-reducer";

const mapStateToProps = (state) => {
  return {
    adult: state.homePageReducer.adult,
  };
};

const HeaderToolsContainer = connect(mapStateToProps, { adultContent })(
  HeaderTools
);
export default HeaderToolsContainer;
