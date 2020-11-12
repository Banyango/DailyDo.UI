import React, {Component} from "react";
import {DateBanner} from "../date-banner/date-banner.component";
import {TodoListContainer} from "../todo-list/todo-list.container";
import {IDayPageProps} from "./day-page.props";
import {DaySummaryContainer} from "../day-summary/day-summary.container";
import {DropdownButton} from "../dropdown-button/dropdown.button";

import "./day-page.css";
import {SpinnerComponent} from "../spinner/spinner.component";
import {DropdownButtonItem} from "../dropdown-button/dropdown-button-item/dropdown-button-item.component";

export class DayPageComponent extends Component<IDayPageProps> {
    componentDidMount(): void {
        this.props.onInit(this.props.day.id);
    }

    componentDidUpdate(prevProps: Readonly<IDayPageProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps.day.id !== this.props.day.id) {
            this.props.onInit(this.props.day.id);
        }
    }

    render(): React.ReactNode {
        const { day, loading } = this.props;
        return (
            <div key={day.id}>
                {loading ? <div className="day-page__spinner"><SpinnerComponent/></div> : this.renderDay()}
            </div>
        )
    }

    private renderDay = ()  => {
        const { day } = this.props;
        return (
            <>
                <div className="day-page__header">
                <DateBanner date={day.date}/>
                    <DropdownButton innerText="...">
                        <DropdownButtonItem key="delete" name="Delete Day" onClick={this.onDelete}/>
                    </DropdownButton>
                </div>
                    <DaySummaryContainer dayId={day.id} />
                <TodoListContainer parent={day.todoTopLevel} indentation={0}/>
            </>
        )
    };

    private onDelete = () => this.props.onDeleteDay(this.props.day.id);
}