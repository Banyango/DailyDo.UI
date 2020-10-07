import React, {useEffect} from "react";

export interface ILogoutProps extends ILogoutDispatchProps{

}

export interface ILogoutDispatchProps {
    /**
     * Emitted when user logs out.
     */
    onLogout: ()=> void;
}

export const Logout : React.FC<ILogoutProps> = props => {
    useEffect(()=> {
        props.onLogout();
    }, []);
    return <></>
};