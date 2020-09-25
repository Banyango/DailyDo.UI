import React, {ReactElement} from 'react';
import classNames from 'classnames';

import './list.css';

export type Item = {
    key: string;
    value: string;
    selected: boolean;
}

export interface IListProps<T extends Item> {
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
            {props.items.map(i => <ListItem key={i.key} item={i} onClick={props.onClick}/>)}
        </ul>
    )
}

export interface IListItemProps<T extends Item> {
    item: T;

    /**
     * Emitted when Day is clicked.
     * @param id    The ID of the day clicked on.
     */
    onClick: (id: string) => void;
}

function ListItem<T extends Item>(props: IListItemProps<T>): ReactElement {
    return (
        <li className={classNames("list__item", {["active"]: props.item.selected})} onClick={()=> props.onClick(props.item.key)}>
            {props.item.value}
        </li>
    )
}