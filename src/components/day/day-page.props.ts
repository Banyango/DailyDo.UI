import {Day} from "../../state/day";

export interface IDayPageProps extends IDayPageDispatchProps, IDayPageStateProps, IDayPageOwnProps {

}

export interface IDayPageOwnProps {
    /**
     * Day.
     */
    day: Day;
}

export interface IDayPageDispatchProps {

    /**
     * Emitted when delete day is called.
     * @param id    The Id of the day to delete.
     */
    onDeleteDay: (id:string) => void;

    /**
     * Emitted when component is mounted.
     * @param id    The Id of the day to load.
     */
    onInit: (id:string) => void;

}

export interface IDayPageStateProps {

    /**
     * True if loading; false otherwise.
     */
    loading:boolean;
}