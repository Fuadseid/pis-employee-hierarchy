import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import TreeView from "./pages/TreeView";
import Applayout from "./pages/Applayout";
import PositionForm from "./pages/AddPosition";
import { Provider } from "react-redux";
import store from "./utils/store";
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
  return (
    <Provider store={store}>
      <RouterProvider router={route} />;
    </Provider>
  );
};

export default App;
