import { connect } from "react-redux";

import Sidenav from "../components/Sidenav/Sidenav/Sidenav";
import { setActiveScreen } from "../store/actions/actions";

const mapStateToProps = state => ({
   activeScreen: state.navigationReducer.activeScreen
});

const mapDispatchToProps = dispatch => ({
   setActiveScreen: screenId => {
      dispatch(setActiveScreen(screenId))
   }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidenav);