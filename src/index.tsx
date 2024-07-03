import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import "./index.css";
import store from "./models/store.ts";
import RouteWrapper from "./components/utils/RouteWrapper.tsx";

import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import Main from "./pages/Main.tsx";
import Schedule from "./pages/Schedule.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      { path: "login", element: <Login /> },
      {
        index: true,
        element: (
          <RouteWrapper>
            <Main />
          </RouteWrapper>
        ),
      },
      {
        path: "schedule",
        element: (
          <RouteWrapper>
            <Schedule />
          </RouteWrapper>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);
