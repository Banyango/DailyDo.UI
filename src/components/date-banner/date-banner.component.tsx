import React, {FC} from 'react';

import './date-banner.css';

export interface IDateBannerProps {
    /**
     * Date of the todo list.
     */
    date: string;
}

export const DateBanner: FC<IDateBannerProps> = (props) => {
    return (
        <div className="date-banner">
            <div className="date-banner_date">{props.date}</div>
        </div>
    )
};