import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SidenavContainer from "../containers/SidenavContainer";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import PerformanceScreen from "../screens/PerformanceScreen/PerformanceScreen";

const Routes = () => {
    return (
        <>
            <Redirect from="/" to="/dashboard" />
            <SidenavContainer/>
            <Switch>
                <Route path={'/dashboard'} exact={true}>
                    <DashboardScreen/>
                </Route>
                <Route path={'/performance'} exact={true}>
                    <PerformanceScreen/>
                </Route>
            </Switch>
        </>
    );
};

export default Routes;