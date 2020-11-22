import React, {ReactElement, useState} from 'react';

import {DropdownButtonList} from "./dropdown-button-list/dropdown-button-list.component";

import './dropdown-button.css';

interface IDropdownProps {
    /**
     * Inner text to display
     */
    innerText?: string;
}

export const DropdownButton: React.FC<IDropdownProps> = (props) => {
    const [expanded, setExpanded] = useState(false);
    const onClick = () => setExpanded(false);
    return (
        <div className="dropdown-button-group">
            {!expanded && <button className="dropdown__button" onClick={(e) => {
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
