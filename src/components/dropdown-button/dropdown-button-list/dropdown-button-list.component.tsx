import React  from 'react';

import '../dropdown-button.css';

interface IDropdownProps {

}

export const DropdownButtonList: React.FC<IDropdownProps> = (props) => {
    return (
        <ul className="dropdown">
            {props.children}
        </ul>
    );
};
