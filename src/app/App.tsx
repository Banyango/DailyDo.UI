import React, {Component} from "react";
import {IAppProps} from "./app.props";
import {DayPageContainer} from "../components/day/day-page.container";
import {MenuButton} from "../components/menu-button/menu-button.component";
import {DayListContainer} from "../components/day-list/day-list.container";

import  '../icons/icons';
import './App.css';

import {CheckEmailComponent} from "../components/pages/check-email/check-email.component";
import {AppRoutes} from "./Routes";
import {Redirect, Route} from "react-router";
import {ConfirmContainer} from "../components/pages/confirm/confirm.container";
import {ResetPasswordContainer} from "../components/pages/reset-password/reset-password.container";
import {RegisterContainer} from "../components/pages/register/register.container";
import {LoginContainer} from "../components/pages/login/login.container";
import {ConnectedRouter} from "connected-react-router";
import {SpinnerComponent} from "../components/spinner/spinner.component";
import {NavBarContainer} from "../components/navbar/navbar.container";
import {Logo} from "../components/logo/logo.component";
import {LogoutContainer} from "../components/pages/logout/logout.container";

class App extends Component<IAppProps> {
    componentDidMount(): void {
        this.props.onInit();
    }
    render() {
        const { initialized, loading, error, day, isLoggedIn } = this.props;

        if (!initialized) {
            return <><SpinnerComponent /></>;
        }

        return (
            <ConnectedRouter history={this.props.history}>
                <Route path={AppRoutes.Login}>
                    <LoginContainer />
                </Route>
                <Route path="/register">
                    <RegisterContainer />
                </Route>
                <Route path="/confirm_account">
                    <ConfirmContainer />
                </Route>
                <Route path={AppRoutes.ResetPassword}>
                    <ResetPasswordContainer />
                </Route>
                <Route path={AppRoutes.CheckEmail}>
                    <CheckEmailComponent />
                </Route>
                <Route path={AppRoutes.Logout}>
                    <LogoutContainer />
                </Route>
                <Route path="/app*">
                    {!isLoggedIn && <Redirect to={AppRoutes.Login}/>}
                    <div className="app__body">
                        <div className="app__logo">
                            <Logo/>
                        </div>
                        <div className="app__header">
                            <NavBarContainer/>
                        </div>
                        <div className="app__sidenav">
                            <MenuButton className="app__addday_button" name="Add Day" icon="calendar-plus" onClick={this.props.onAddDay}/>
                            <DayListContainer />
                        </div>
                        <div className="app__main">
                            <Route path="/app/day*">
                                {day && <div className="app__day_view"><DayPageContainer day={this.props.day}/></div>}
                            </Route>
                        </div>
                    </div>
                </Route>
            </ConnectedRouter>
        );
    }

    renderDay() {
        const {onAddDay, day, days, onSelectDay} = this.props;
        return (
            <div className="app">
                <div className="app__side_bar">
                    <MenuButton name="Add Day" icon="calendar-plus" onClick={onAddDay}/>
                    <DayListContainer />
                </div>
                {day && <div className="app__day_view"><DayPageContainer day={day}/></div>}
            </div>
        );
    }
}

export default App;
