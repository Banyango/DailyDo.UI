import React, {useCallback} from 'react';

import '../dropdown-button.css';

export interface IDropdownButtonItemProps {
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
    onClick: (e) => void;

    /**
     * Set Expanded value
     * @param value
     */
    setExpanded?: (value: boolean) => void;
}

export const DropdownButtonItem: React.FC<IDropdownButtonItemProps> = props => {
    const onClick = useCallback((e) => {
        e.preventDefault();
        props.setExpanded(false);
        props.onClick(e);
    }, []);
    return (
        <li className="dropdown-selection" onClick={onClick}>{props.name}</li>
    )
};