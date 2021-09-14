import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SidenavContainer from "../containers/SidenavContainer";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import PerformanceScreen from "../screens/PerformanceScreen/PerformanceScreen";

const Routes = () => {
    return (
        <>
            <SidenavContainer/>
            <Switch>
                <Route path={'/'} exact={true}>
                    <Redirect to={'/dashboard'}/>
                </Route>
                <Route path={'/dashboard'}>
                    <DashboardScreen/>
                </Route>
                <Route path={'/performance'}>
                    <PerformanceScreen/>
                </Route>
            </Switch>
        </>
    );
};

export default Routes;