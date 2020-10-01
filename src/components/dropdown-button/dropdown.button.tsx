import React, {useState} from 'react';

import './dropdown-button.css';

export type DropDownButton = {

    /**
     * Key
     */
    key: string;


    /**
     * Drop down selection name.
     */
    name: string;

    /**
     * Emitted on click.
     */
    onClick: () => void;
}

interface IDropdownProps {
    /**
     * Dropdown buttons
     */
    buttons: DropDownButton[];
}

export const DropdownButton: React.FC<IDropdownProps> = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="dropdown-button-group">
            <button className="dropdown__button" onClick={(e) => {
                e.preventDefault();
                setExpanded(!expanded);
            }} onBlur={() => setExpanded(false)}>+
            </button>
            {expanded &&
            <ul className="dropdown">
                {props.buttons.map(b => <li className="dropdown-selection" onClick={(e) => {
                    e.preventDefault();
                    setExpanded(false);
                    b.onClick()
                }}>{b.name}</li>)}
            </ul>}
        </div>
    );
};