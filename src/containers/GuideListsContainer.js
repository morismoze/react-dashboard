import { connect } from "react-redux";

import GuideLists from "../components/Performance/GuideLists";

const mapStateToProps = state => ({
    performance: state.mainReducer.performance
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GuideLists);