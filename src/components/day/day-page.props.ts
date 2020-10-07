import {Day} from "../../state/day";

export interface IDayPageProps extends IDayPageDispatchProps, IDayPageStateProps {
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
}

export interface IDayPageStateProps {}