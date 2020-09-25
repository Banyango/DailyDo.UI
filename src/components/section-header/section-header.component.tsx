import React from 'react';

import './section-header.css'

export interface ISectionHeaderProps {
    /**
     * The header.
     */
    header:string;
}

export const SectionHeader : React.FC<ISectionHeaderProps> = props => {
    return (
        <div className="section-header__container">
            <div className="section-header__text">{props.header}</div>
            <hr/>
        </div>
    )
};