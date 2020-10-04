import React, {ReactElement} from 'react';
import classNames from 'classnames';

import './list.css';

export type Item = {
    key: string;
    value: string;
    selected: boolean;
}

export interface IListProps<T extends Item> {

    /**
     * The currently selected index
     */
    selectedIndex?: string;

    /**
     * Array of items.
     */
    items: T[];

    /**
     * Emitted when item is clicked.
     * @param id    The ID of the day clicked on.
     */
    onClick: (id: string) => void;
}

export function List<T extends Item>(props: IListProps<T>): ReactElement {
    return (
        <ul className="list">
            {props.items.map(i => <ListItem selected={i.key===props.selectedIndex} key={i.key} item={i} onClick={props.onClick}/>)}
        </ul>
    )
}

export interface IListItemProps<T extends Item> {

    /**
     * True if item is selected; false otherwise.
     */
    selected: boolean;

    /**
     * Item
     */
    item: T;

    /**
     * Emitted when Day is clicked.
     * @param id    The ID of the day clicked on.
     */
    onClick: (id: string) => void;
}

function ListItem<T extends Item>(props: IListItemProps<T>): ReactElement {
    return (
        <li className={classNames("list__item", {["list__active"]: props.selected})} onClick={()=> props.onClick(props.item.key)}>
            {props.item.value}
        </li>
    )
}