import { connect } from "react-redux";

import PerformanceOverview from "../components/Performance/PerformanceOverview/PerformanceOverview";

const mapStateToProps = state => ({
    performance: state.mainReducer.performance
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PerformanceOverview);