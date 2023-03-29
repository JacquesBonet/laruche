import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { List as Products } from "./pages/products/List";
import { Details } from "./pages/products/Details";
import PropTypes from "prop-types";

const router = (search) => (
  createBrowserRouter([
    {
      path: "/",
      element: <Products search={search} />,
    },
    {
      path: "/products/:id",
      element: <><Products search={search} /><Details /></>
    },
    {
      path: "/products",
      element: <Products search={search} />,
    }]
  )
);

export const Routes = ({ state }) => (
  <>
    <RouterProvider router={router(state.search)} />
  </>
);

Routes.propTypes = {
  state: PropTypes.object.isRequired
};
