import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { MainLayout } from "layout";
import { DeliveryPage } from "pages";

export const routes = [
  {
    path: "/",
    Component: MainLayout,
    routes: [
      {
        path: "dashboard",
        exact: true,
        Component: DeliveryPage
      },
      {
        path: "/setting",
        exact: true,
        Component: DeliveryPage
      },
      {
        path: "/user",
        exact: true,
        Component: DeliveryPage
      },
      {
        path: "/delivery",
        exact: true,
        Component: DeliveryPage
      },
      {
        path: "/api",
        exact: true,
        Component: DeliveryPage
      },
      {
        path: "/prompt",
        exact: true,
        Component: DeliveryPage
      },
      {
        path: "/notification",
        exact: true,
        Component: DeliveryPage
      },
      {
        path: "/message-personal",
        exact: true,
        Component: DeliveryPage
      },
      {
        path: "/playerId",
        exact: true,
        Component: DeliveryPage
      },
      {
        path: "/behavior",
        exact: true,
        Component: DeliveryPage
      },
      {
        RedirectTo: "/delivery"
      }
    ]
  },
  {
    RedirectTo: "/delivery"
  }
];

export const RouteWithSubRoutes = ({
  path,
  Component,
  routes,
  exact,
  RedirectTo
}) => {
  return (
    <Route
      path={path}
      exact={exact ? true : false}
      render={props =>
        // pass the sub-routes down to keep nesting
        RedirectTo ? (
          <Redirect
            to={{
              pathname: RedirectTo,
              // eslint-disable-next-line react/prop-types
              state: { from: props.location }
            }}
          />
        ) : (
          <Component {...props} routes={routes} />
        )
      }
    />
  );
};

RouteWithSubRoutes.propTypes = {
  path: PropTypes.string,
  Component: PropTypes.any,
  routes: PropTypes.array,
  exact: PropTypes.bool,
  RedirectTo: PropTypes.string
};
