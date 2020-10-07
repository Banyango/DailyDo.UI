import React, {Component} from "react";
import {DateBanner} from "../date-banner/date-banner.component";
import {TodoListContainer} from "../todo-list/todo-list.container";
import {IDayPageProps} from "./day-page.props";
import {DaySummaryContainer} from "../day-summary/day-summary.container";
import {DropDownButton, DropdownButton} from "../dropdown-button/dropdown.button";
import {createSelector} from "reselect";

import "./day-page.css";

export class DayPageComponent extends Component<IDayPageProps> {
    private buttons = createSelector((props: IDayPageProps)=> props.onDeleteDay, (props: IDayPageProps)=> props.day?.id, (onDeleteDay: (id:string)=> void): DropDownButton[] => {
       return [{
            key:'1',
            name:"Delete Day",
            onClick: ()=> onDeleteDay(this.props.day.id)
        }];
    });
    render(): React.ReactNode {
        const { day } = this.props;
        return (
            <div key={day.id}>
                <div className="day-page__header">
                    <DateBanner date={day.date}/>
                    <DropdownButton buttons={this.buttons(this.props)} innerText="..."/>
                </div>
                <DaySummaryContainer dayId={day.id} />
                <TodoListContainer parent={day.todoTopLevel} indentation={0}/>
            </div>
        )
    }
}