import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SidenavContainer from "../containers/SidenavContainer";
import MenuContainer from "../containers/MenuContainer";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import PerformanceScreen from "../screens/PerformanceScreen/PerformanceScreen";
import GuidesScreen from "../screens/GuidesScreen/GuidesScreen";
import HotspotsScreen from "../screens/HotspotsScreen/HotspotsScreen";
import ChecklistsScreen from "../screens/ChecklistsScreen/ChecklistsScreen";
import NpsScreen from "../screens/NpsScreen/NpsScreen";
import SegmentsScreen from "../screens/SegmentsScreen/SegmentsScreen";
import ThemesScreen from "../screens/ThemesScreen/ThemesScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import LogoutScreen from "../screens/LogoutScreen/LogoutScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

const Routes = () => {
    return (
        <>
            <Redirect from="/" to="/dashboard"/>
            <SidenavContainer/>
            <MenuContainer/>
            <Switch>
                <Route path={'/dashboard'} exact={true}>
                    <DashboardScreen/>
                </Route>
                <Route path={'/performance'} exact={true}>
                    <PerformanceScreen/>
                </Route>
                <Route path={'/guides'} exact={true}>
                    <GuidesScreen/>
                </Route>
                <Route path={'/hotspots'} exact={true}>
                    <HotspotsScreen/>
                </Route>
                <Route path={'/checklists'} exact={true}>
                    <ChecklistsScreen/>
                </Route>
                <Route path={'/nps'} exact={true}>
                    <NpsScreen/>
                </Route>
                <Route path={'/segments'} exact={true}>
                    <SegmentsScreen/>
                </Route>
                <Route path={'/themes'} exact={true}>
                    <ThemesScreen/>
                </Route>
                <Route path={'/profile'} exact={true}>
                    <ProfileScreen/>
                </Route>
                <Route path={'/settings'} exact={true}>
                    <SettingsScreen/>
                </Route>
                <Route path={'/logout'} exact={true}>
                    <LogoutScreen/>
                </Route>
                <Route path={'*'} >
                    <Redirect from="/" to="/dashboard" />
                </Route>
            </Switch>
        </>
    );
};

export default Routes;