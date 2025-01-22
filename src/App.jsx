import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import TreeView from "./pages/TreeView";
const route = createBrowserRouter([
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
]);
const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
