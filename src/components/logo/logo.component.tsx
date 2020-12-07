import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";

import "./logo.css";

import {
faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

library.add(faListAlt);

export interface ILogoProps {
    className?:string
}

export const Logo : React.FC<ILogoProps> = props => {
    return (
        <li className={classNames("logo", props.className)}>
            <div className="logo__container">
                <FontAwesomeIcon icon="list-alt" />
                <span style={{paddingLeft:"1px"}}>DailyDo</span>
            </div>
        </li>
    )
};

