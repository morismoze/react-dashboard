import { connect } from "react-redux";

import Menu from "../components/shared/Menu";
import { toggleMenu } from "../store/actions/actions";

const mapStateToProps = state => ({
    isMenuActive: state.navigationReducer.isMenuActive
});

const mapDispatchToProps = dispatch => ({
    toggleMenu: () => {
        dispatch(toggleMenu());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);