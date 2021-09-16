import { connect } from "react-redux";

import UserGreet from "../components/User/UserGreet/UserGreet";
import { setActiveScreen } from "../store/actions/actions";

const mapStateToProps = state => ({
    activeScreen: state.navigationReducer.activeScreen,
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
    userStatus: state.userReducer.userStatus,
    activityGroup: state.userReducer.activityGroup,
    progress: state.userReducer.progress
});

const mapDispatchToProps = dispatch => ({
    setActiveScreen: screenId => {
        dispatch(setActiveScreen(screenId))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserGreet);