import {ThunkDispatch} from "redux-thunk";
import {ILogoutDispatchProps, Logout} from "./logout.component";
import {UserActions} from "../../../store/user/user.actions";
import {connect} from "react-redux";

const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, any>
): ILogoutDispatchProps => {
    return {
        onLogout: () => dispatch(UserActions.logout())
    };
};

export const LogoutContainer = connect(null, mapDispatchToProps)(Logout);
