import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase";
import { USER_ACTION_TYPES } from "./user.types";
export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};
const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null
};
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  console.log("dispatched");
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
