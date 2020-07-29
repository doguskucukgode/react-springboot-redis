import User from "../../components/model/User";

export type UserActions = ReturnType<typeof addUserState> | ReturnType<typeof removeUserState> | ReturnType<typeof setUsersState>;

export function addUserState(user: User) {
    return {
      type: "AddUser",
      payload: user
    } as const;
  }
  
export  function removeUserState(id: string) {
    return {
      type: "RemoveUser",
      payload: id
    } as const;
  }

export function setUsersState(users: User[]) {
    return {
      type: "SetUsers",
      payload: users
    } as const;
  }
  