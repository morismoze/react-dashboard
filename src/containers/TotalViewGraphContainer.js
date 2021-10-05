import { connect } from "react-redux";

import TotalViewGraph from "../components/Performance/TotalViewGraph";

const mapStateToProps = state => ({
    performance: state.mainReducer.performance
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TotalViewGraph);