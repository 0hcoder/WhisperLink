import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SendMess from "./components/SendMess";
import { loadUserData } from "../Actions/loadUserData";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "login",
    element: (
      <Layout>
        <LoginPage />
      </Layout>
    ),
  },
  {
    path: "register",
    element: (
      <Layout>
        <RegisterPage />
      </Layout>
    ),
  },
  {
    path: `sendmess/:id`,
    element: (
      <Layout>
        <SendMess />
      </Layout>
    ),
  },
  {
    path: "dashboard",
    element: (
      <Layout>
        <DashboardPage />
      </Layout>
    ),
  },
]);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    loadUserData(dispatch);
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
