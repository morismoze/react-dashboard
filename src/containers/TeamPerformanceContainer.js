import { connect } from "react-redux";

import TeamPerformance from "../components/Performance/TeamPerformance";

const mapStateToProps = state => ({
    performance: state.mainReducer.performance
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamPerformance);