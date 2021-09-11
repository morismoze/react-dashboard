import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import SidenavContainer from "../containers/SidenavContainer";

const Routes = () => {
    return (
        <>
            <SidenavContainer/>
            <Switch>
                <Route path={'/'} exact={true}>
                    <DashboardScreen/>
                </Route>
            </Switch>
        </>
    );
};

export default Routes;