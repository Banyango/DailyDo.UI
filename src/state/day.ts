export interface Day {

    /**
     * Id of the day
     */
    id : string;

    /**
     * Date string.
     */
    date: string;

    /**
     * Top level todo id.
     */
    todoTopLevel:string;

    /***
     * Top level summary.
     */
    summary?: string;
}