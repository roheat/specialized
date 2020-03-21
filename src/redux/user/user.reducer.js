import { SET_CURRENT_USER } from "./user.action-types";

const INITIAL_STATAE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATAE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
