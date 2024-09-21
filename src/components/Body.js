import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import FormData from "./FormData";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  // First thing Will be hook Every Time then Rest...

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/formData",
      element: <FormData />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //When Sign In/SignUp
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        //Whenever Sign Out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter}>
        <Login />
        <Browse />
      </RouterProvider>
    </div>
  );
};

export default Body;
