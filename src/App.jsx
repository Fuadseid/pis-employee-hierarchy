import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AddPersons from "./pages/AddPersons";
import TreeView from "./pages/TreeView";
import Applayout from "./pages/Applayout";
import PositionForm from "./pages/AddPosition";

import { Provider } from "react-redux";
import store from "./redux/store";

import ErrorPage from "./pages/ErrorPage";

const route = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/form",
        element: <AddPersons />,
      },
      {
        path: "/treeview",
        element: <TreeView />,
      },
      {
        path: "/add-postion",
        element: <PositionForm />,
      },
      {
        path: "*", // Catch-all route for unmatched paths
        element: <ErrorPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={route} />;
    </Provider>
  );
};

export default App;
