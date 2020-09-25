import React, {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";

import "./menu-button.css";

export interface IMenuButtonProps {
    /**
     * button name.
     */
    name: string;

    /**
     * Emitted on click of the button.
     */
    onClick: () => void;

    /**
     * Icon to display
     */
    icon: IconProp;

    /**
     * CSS classname.
     */
    className?: string;
}


export const MenuButton: FC<IMenuButtonProps> = (props) => {
    return (
        <button className={classNames("menu_button",props.className)} onClick={props.onClick}>
            <FontAwesomeIcon className="menu_button__icon" icon={props.icon}/>
            <div className="menu_button__text">{props.name}</div>
        </button>
    )
};