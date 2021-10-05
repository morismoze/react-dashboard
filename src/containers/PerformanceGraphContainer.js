import { connect } from "react-redux";

import PerformanceGraph from "../components/Performance/PerformanceGraph";

const mapStateToProps = state => ({
    performance: state.mainReducer.performance
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PerformanceGraph);