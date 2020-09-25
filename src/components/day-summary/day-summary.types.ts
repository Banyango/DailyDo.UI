import {IFormDispatchProps, IFormStateProps} from "../form/form.props";

export interface IDaySummaryProps extends IDaySummaryDispatchProps, IDaySummaryStateProps, IDaySummaryOwnProps {

}

export interface IDaySummaryOwnProps {

    /**
     * The ID of the day.
     */
    dayId: string;
}

export interface IDaySummaryDispatchProps extends IFormDispatchProps<IDaySummaryForm> {

}

export interface IDaySummaryStateProps extends IFormStateProps<IDaySummaryForm> {

}

export interface IDaySummaryForm {
    summary: string;
}