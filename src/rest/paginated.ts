import {Link} from "./link";

export interface IPaginated<T> {
    /**
     * Offset in total collection.
     */
    offset: number;

    /**
     * Limit of paginated items.
     */
    limit:number;

    /**
     * True if collection has previous pages; false otherwise.
     */
    hasPreviousPages: boolean;

    /**
     * True if collection has next pages; false otherwise.
     */
    hasNextPages: boolean;

    /**
     * The paginated data.
     */
    items: T[];

    /**
     * Link to next items.
     */
    next: Link;

    /**
     * Link to previous items.
     */
    previous: Link;
}