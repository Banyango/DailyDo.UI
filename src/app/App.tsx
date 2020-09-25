import React, {Component} from "react";
import {IAppProps} from "./app.props";
import {DayPageContainer} from "../components/day/day-page.container";
import {MenuButton} from "../components/menu-button/menu-button.component";
import {DayListContainer} from "../components/day-list/day-list.container";

import  '../icons/icons';
import './App.css';

import {CheckEmailComponent} from "../components/pages/check-email/check-email.component";
import {AppRoutes} from "./Routes";
import {Route} from "react-router";
import {ConfirmContainer} from "../components/pages/confirm/confirm.container";
import {ResetPasswordContainer} from "../components/pages/reset-password/reset-password.container";
import {RegisterContainer} from "../components/pages/register/register.container";
import {LoginContainer} from "../components/pages/login/login.container";
import {ConnectedRouter} from "connected-react-router";
import {SpinnerComponent} from "../components/spinner/SpinnerComponent";
import {NavBarContainer} from "../components/navbar/navbar.container";

class App extends Component<IAppProps> {
    componentDidMount(): void {
        this.props.onInit();
    }
    render() {
        const { initialized, loading, error } = this.props;

        if (!initialized) {
            return <></>;
        }

        return (
            <>
                <NavBarContainer />
                {loading ? <SpinnerComponent /> : this.renderRoutes()}
                <footer />
            </>
        );
    }

    private renderRoutes = () => {
        return (
            <ConnectedRouter history={this.props.history}>
                <Route exact path="/home">
                    {this.renderDay()}
                </Route>
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
            </ConnectedRouter>
        )
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
