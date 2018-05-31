import React from "react";
// import { View, Text } from "react-native";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";

//needs one single root scene
const RouterComponent = props => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
