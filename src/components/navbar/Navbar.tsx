import React, {FC, useCallback, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";

import "./navbar.css";

import {
  fas,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(fas, faTimes, faBars);

export interface INavBarProps extends INavBarStateProps{

}

export interface INavBarStateProps {
  /**
   * True if user is logged in; false otherwise.
   */
  isLoggedIn:boolean
}

export const Navbar: React.FC<INavBarProps> = props => {
    return (
        <nav className="navbar">
            <ul className="menu">
                <li>
                    <a href="/">Home</a>
                </li>
                {props.isLoggedIn ? (<li ><a href="/logout">Logout</a></li>) : <></>}
                {!props.isLoggedIn ? <NavBarLogin /> : <></>}
            </ul>
        </nav>
    );
};

interface INavBarLoginProps {

}

const NavBarLogin: React.FC<INavBarLoginProps> = props => {
  return (
      <>
        <li className={classNames("item", "button")}>
          <a href="/login">Log In</a>
        </li>
        <li className={classNames("item", "button", "secondary")}>
          <a href="/register">Sign Up</a>
        </li>
      </>
  )
};
