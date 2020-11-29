import {IStore} from "../store";
import {User} from "../../rest/user/user";

export class UserSelectors {
    static getLoggedInUser(state: IStore): User {
        return state.user.user;
    }
}
