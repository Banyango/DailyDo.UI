import React, {Component} from "react";
import {DateBanner} from "../date-banner/date-banner.component";
import {TodoListContainer} from "../todo-list/todo-list.container";
import {IDayPageProps} from "./day-page.props";
import {DaySummaryContainer} from "../day-summary/day-summary.container";


export class DayPageComponent extends Component<IDayPageProps> {
    render(): React.ReactNode {
        const { day } = this.props;
        return (
            
            <div>
                <DateBanner date={day.date}/>
                <DaySummaryContainer dayId={day.id} />

                {/*<MenuButton name="Todos" onClick={this.onClickTodos} icon="check-double"/>*/}
                <TodoListContainer parent={day.todoTopLevel} indentation={0}/>
            </div>
        )
    }
}