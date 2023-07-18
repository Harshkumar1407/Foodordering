import React, { createElement, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import Profile from "./components/ProfileClass";
import Cart from "./components/Cart";

import { Provider } from "react-redux";

import Shimmer from "./components/Shimmer";
import store from "./utilits/store";
//import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));

const Applayout = () => {
  return (
    <Provider store={store}>
      <div className="app">
      <Header />
      {/*OutLet */}
      <Outlet />
    </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/About",
        element: <About />,
        children: [
          {
            path: "Profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id",
        element: <ResturantMenu />,
      },
      {
        path:"/Cart",
        element: <Cart/>

      },

      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
