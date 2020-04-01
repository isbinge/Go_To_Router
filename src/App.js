import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import "./App.css";

const MixComponent = props => {
  const { fruit } = useParams();
  return (
    <div>
      {" "}
      <h1>{`${fruit}`}</h1>
      {props.children}
    </div>
  );
};

const Type = () => {
  const { carType } = useParams();
  return <h2>{carType}</h2>;
};

const Tacos = props => {
  const { path, url } = useRouteMatch();
  const { fruit } = useParams();
  console.log(path, url);
  return (
    <div>
      <h1>{`${fruit}`}</h1>
    </div>
  );
};
const NoMatch = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h2>{`The ${match.url} page is lost ...`}</h2>
    </div>
  );
};
const routeConfig = [
  {
    path: "/sandwiches",
    component: MixComponent
  },
  {
    path: "/tacos",
    component: MixComponent,
    routes: [
      {
        path: "/tacos/:carType",
        component: Type
      }
    ]
  }
];
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to={"/tacos"}>Tacos</Link>
          </li>
          <li>
            <Link to={"/sandwiches"}>Sandwiches</Link>
          </li>
          <li>
            <Link to={"/tacos/bus"}>bus</Link>
          </li>
          <li>
            <Link to={"/tacos/cart"}>cart</Link>
          </li>
        </ul>
        <Switch>
          {routeConfig.map(route => {
            return (
              <Route path={route.path} component={route.component}>
                {route.routes && (
                  <Switch>
                    {route.routes.map(subRoute => {
                      return (
                        <Route
                          path={subRoute}
                          component={subRoute.component}
                        ></Route>
                      );
                    })}
                  </Switch>
                )}
              </Route>
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
