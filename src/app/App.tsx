import React, {Component, useEffect, useState} from "react";
import {IAppProps} from "./app.props";
import {DayPageContainer} from "../components/day/day-page.container";
import {MenuButton} from "../components/menu-button/menu-button.component";
import {DayListContainer} from "../components/day-list/day-list.container";

import '../icons/icons';
import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';

import {CheckEmailComponent} from "../components/pages/check-email/check-email.component";
import {AppRoutes} from "./Routes";
import {Redirect, Route} from "react-router";
import {ConfirmContainer} from "../components/pages/confirm/confirm.container";
import {ResetPasswordContainer} from "../components/pages/reset-password/reset-password.container";
import {RegisterContainer} from "../components/pages/register/register.container";
import {LoginContainer} from "../components/pages/login/login.container";
import {ConnectedRouter} from "connected-react-router";
import {SpinnerComponent} from "../components/spinner/spinner.component";
import {Logo} from "../components/logo/logo.component";
import {LogoutContainer} from "../components/pages/logout/logout.container";
import {Menu, ProSidebar} from "react-pro-sidebar/dist";
import {Navbar} from "../components/navbar/Navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MiniNavBar} from "../components/mini-navbar/mini-navbar.component";

export const App: React.FC<IAppProps> = ({initialized, history, onInit, day, isLoggedIn, onAddDay, onDuplicateDay}) => {
    const [toggled, setToggled] = useState(true);

    useEffect(() => {
        onInit();
    }, []);

    if (!initialized) {
        return <><SpinnerComponent/></>;
    }

    return (
        <ConnectedRouter history={history}>
            <Route path={AppRoutes.Login}>
                <LoginContainer/>
            </Route>
            <Route path="/register">
                <RegisterContainer/>
            </Route>
            <Route path="/confirm_account">
                <ConfirmContainer/>
            </Route>
            <Route path={AppRoutes.ResetPassword}>
                <ResetPasswordContainer/>
            </Route>
            <Route path={AppRoutes.CheckEmail}>
                <CheckEmailComponent/>
            </Route>
            <Route path={AppRoutes.Logout}>
                <LogoutContainer/>
            </Route>
            <Route path="/app*">
                {!isLoggedIn && <Redirect to={AppRoutes.Login}/>}
                <div className="app__main">
                    <ProSidebar className="app__menu" breakPoint="md" toggled={toggled} onToggle={(value) => setToggled(value)}>
                        <Menu popperArrow iconShape="square" >
                            <Logo/>
                            <MenuButton className="app__add_day_button" name="Add Day" icon="calendar-plus"
                                        onClick={onAddDay}/>
                            <MenuButton className="app__duplicate_day_button" name="Duplicate Day" icon="copy"
                                        onClick={onDuplicateDay}/>
                            <DayListContainer/>
                        </Menu>
                    </ProSidebar>
                    <div className="app__body">
                        <MiniNavBar toggled={toggled} toggleHandler={(value)=>setToggled(value)} isLoggedIn={isLoggedIn}/>
                        <Route path="/app/day*">
                            {day && <div className="app__day_view"><DayPageContainer day={day}/></div>}
                        </Route>
                    </div>
                </div>
            </Route>
        </ConnectedRouter>
    );
};

export default App;
