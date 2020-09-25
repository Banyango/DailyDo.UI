import { ThunkDispatch } from "redux-thunk";
import {IStore} from "../../store/store";
import {connect} from "react-redux";
import {INavBarStateProps, Navbar} from "./Navbar";

const mapStateToProps = (state: IStore): INavBarStateProps => {
    return {
        isLoggedIn:!!state.user.user
    };
};

export const NavBarContainer = connect(
    mapStateToProps
)(Navbar);
