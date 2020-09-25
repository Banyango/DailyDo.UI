import { History } from "history";
import {Day} from "../state/day";

export interface IAppProps extends IAppDispatchProps, IAppStateProps {
  /**
   * React redux history.
   */
  history: History<History.LocationState>;
}

export interface IAppStateProps {
  /**
   * Error string to show to user.
   */
  error: string;

  /**
   * True if the app is loading; false otherwise.
   */
  loading: boolean;

  /**
   * True if the app is initialized; false otherwise.
   */
  initialized: boolean;

  day: Day;
  days: Day[];
}

export interface IAppDispatchProps {
  /**
   * Called when component mounts.
   */
  onInit: () => void;

  /**
   * Emitted when you add a day.
   */
  onAddDay: () => void;

  /**
   * Emitted on export.
   */
  onExport: () => void;

  /**
   * Emitted when user selects a day.
   * @param dayId    The day ID.
   */
  onSelectDay: (dayId:string) => void;
}
