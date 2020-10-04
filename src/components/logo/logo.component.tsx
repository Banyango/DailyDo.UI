import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";

import "./logo.css";

import {
faListAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(faListAlt);


export const Logo : React.FC = () => {
    return (
        <li className="logo">
            <a href="/">
                <FontAwesomeIcon icon="list-alt" />
                <span style={{paddingLeft:"1px"}}>DailyDo</span>
            </a>
        </li>
    )
};

