import { connect } from "react-redux";

import Sidenav from "../components/Sidenav/Sidenav/Sidenav";
import {setActiveScreen, toggleSidebar} from "../store/actions/actions";

const mapStateToProps = state => ({
   activeScreen: state.navigationReducer.activeScreen,
   isSidebarCollapsed: state.navigationReducer.isSidebarCollapsed,
   userStatus: state.userReducer.userStatus,
   firstName: state.userReducer.firstName,
   lastName: state.userReducer.lastName
});

const mapDispatchToProps = dispatch => ({
   setActiveScreen: screenId => {
      dispatch(setActiveScreen(screenId))
   },
   toggleSidebar: () => {
      dispatch(toggleSidebar());
   }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidenav);