import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { IAppDispatchProps, IAppStateProps } from "./app.props";
import App from "./App";
import { IStore } from "../store/store";
import {DayActions} from "../store/day/day.actions";
import {ExportUtils} from "../utils/export-utils";
import {IndexActions} from "../store/index/index.actions";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): IAppDispatchProps => {
  return {
    onInit: () => {dispatch(IndexActions.index())},
    onAddDay: () => dispatch(DayActions.AddDay()),
    onExport: () => dispatch(ExportUtils.export()),
    onSelectDay: (dayId:string) => dispatch(DayActions.SelectDay(dayId))
  };
};

const mapStateToProps = (state: IStore): IAppStateProps => {
  return {
    initialized: !!state.index.index,
    loading: state.index.pending,
    error: state.index.error,
    day: DayActions.getSelectedDay(state),
    days: Object.values(state.days.days)
  }
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
