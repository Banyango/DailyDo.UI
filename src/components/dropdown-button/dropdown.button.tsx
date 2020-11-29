import React, {ReactElement, useRef, useState} from 'react';

import {DropdownButtonList} from "./dropdown-button-list/dropdown-button-list.component";

import './dropdown-button.css';
import {useClickAway} from "react-use";

interface IDropdownProps {
    /**
     * Inner text to display
     */
    innerText?: string;
}

export const DropdownButton: React.FC<IDropdownProps> = (props) => {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    useClickAway(ref, () => {
        setExpanded(false);
    });
    const onClick = () => setExpanded(false);
    return (
        <div className="dropdown-button-group" ref={ref}>
            {<button className="dropdown__button" onClick={(e) => {
                e.preventDefault();
                setExpanded(!expanded);
            }} onBlur={() => setExpanded(false)}>{props.innerText}
            </button>}
            {expanded &&
            <DropdownButtonList>
                {React.Children.map(props.children, child => {
                    const element = child as ReactElement;
                    return element ? React.cloneElement(element, {setExpanded: onClick}) : null
                })}
            </DropdownButtonList>
            }
        </div>
    );
};

DropdownButton.defaultProps = {
    innerText: "+"
};
