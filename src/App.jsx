import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import TreeView from "./pages/TreeView";
import Applayout from "./pages/Applayout";
import PositionForm from "./pages/AddPosition";
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
        element: <Form />,
      },
      {
        path: "/treeview",
        element: <TreeView />,
      },
      {
        path: "/add-postion",
        element: <PositionForm />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
