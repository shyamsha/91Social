import React, { Fragment, Component, FC } from "react";
import { Route, Switch } from "react-router";
import Dashboard from "../containers/dashboard/Dashboard";
import Payload from "../containers/payloads/Payload";
import { RouteEnums } from "./RouteEnums";

class AppNavigator extends Component {
  App: FC = () => (
    <Fragment>
      <Switch>
        <Route path={`/`} component={Dashboard} exact />
        <Route path={`/${RouteEnums.PAYLOAD}`} component={Payload} exact />
      </Switch>
    </Fragment>
  );

  render() {
    return <this.App />;
  }
}

export default AppNavigator;
