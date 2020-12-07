import React, {useState} from 'react';
import {Logo} from "../logo/logo.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Navbar} from "../navbar/Navbar";

import "./mininavbar.css"
import classNames from "classnames";

export interface IMiniNavBarProps {
    toggled: boolean;
    toggleHandler: (value: boolean) => void;
    isLoggedIn: boolean;
}

export const MiniNavBar: React.FC<IMiniNavBarProps> = props => {
    const [navShowing, setNavShowing] = useState(false);
    return (
        <>
            <div className="mininavbar">
                {!props.toggled && <div className={classNames("mininavbar__toggle", "mininavbar__hidden-md")}
                                        onClick={() => props.toggleHandler(true)}>
                    <FontAwesomeIcon icon="list"/>
                </div>}
                {!props.toggled && <Logo className={classNames("mininavbar__logo", "light", "mininavbar__hidden-md")}/>}
                <div className={classNames("mininavbar__toggle", "mininavbar__hidden-md")}
                     onClick={() => setNavShowing(!navShowing)}>
                    {!navShowing ? <FontAwesomeIcon icon="bars"/> : <FontAwesomeIcon icon="times"/>}
                </div>
            </div>
            {!props.toggled && navShowing && <Navbar isLoggedIn={props.isLoggedIn}/>}
        </>
    )
};