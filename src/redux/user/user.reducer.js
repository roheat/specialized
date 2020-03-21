import { UserActionTypes } from "./user.types";

const INITIAL_STATAE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATAE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
