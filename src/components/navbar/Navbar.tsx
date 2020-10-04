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
  const [active, setActive] = useState(false);
  const sendRequest = useCallback(() => {
    setActive(!active);
  }, [active]);
  const style = classNames("item", { active });
  return (
    <nav className="navbar">
      <ul className="menu">
        <li style={{marginTop:"15px"}} className={style}>
          <a href="/">Home</a>
        </li>
        {props.isLoggedIn ? (<li className={style}><a href="/logout">Logout</a></li>) : <></>}
        {!props.isLoggedIn ? <NavBarLogin active={active}/> : <></>}
        <li className="toggle" onClick={sendRequest}>
          <FontAwesomeIcon icon={!active ? "bars" : "times"} />
        </li>
      </ul>
    </nav>
  );
};

interface INavBarLoginProps {
  active:boolean;
}

const NavBarLogin: React.FC<INavBarLoginProps> = props => {
  const active = props.active;
  return (
      <>
        <li className={classNames("item", "button", { active })}>
          <a href="/login">Log In</a>
        </li>
        <li className={classNames("item", "button", "secondary", { active })}>
          <a href="/register">Sign Up</a>
        </li>
      </>
  )
};
