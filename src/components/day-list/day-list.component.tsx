import React from 'react';
import {Item, List} from "../list/list.component";

export interface IDayListProps extends IDayListStateProps, IDayListDispatchProps {

}

export interface IDayListStateProps {
    /**
     * Days list items
     */
    items: Item[];
}

export interface IDayListDispatchProps {
    /**
     * Emitted when Day is clicked.
     * @param id    The ID of the day clicked on.
     */
    onClick: (id: string) => void;
}

export const DayList: React.FC<IDayListProps> = (props) => {
    return (
        <List items={props.items} onClick={props.onClick}/>
    )
};
