import { createContext, useState, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// // export const UserProvider = ({ children }) => {
// //   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
// //   console.log(currentUser);
// //   // const setCurrentUser = (user) => {
// //   //   dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
// //   // };
// //   const value = { currentUser, setCurrentUser };  
// //   // useEffect(() => {
// //   //   const unsubscribe = onAuthStateChangedListener((user) => {
// //   //     if (user) {
// //   //       createUserDocumentFromAuth(user);
// //   //     }
// //   //     setCurrentUser(user);
// //   //   });
// //   //   return unsubscribe;
// //   // }, []);
// //   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
