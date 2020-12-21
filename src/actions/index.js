import * as actionTypes from "./types";

/* User Actions */
export const setUser = (user) => {
    console.log("setuser");
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user,
    },
  };
};

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER,
  };
};
