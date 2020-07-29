import User from "../../components/model/User";
import { UserActions } from "../actions/UserActions";

export function userReducer(state: User[] = [], action: UserActions) {
    switch (action.type) {
        case "AddUser":
            return [...state, action.payload];
        case "RemoveUser":
            return state.filter(person => person.id !== action.payload);
        case "SetUsers":
            return action.payload;
        default:
            neverReached(action);
    }
    return state;
}

function neverReached(never: never) { }