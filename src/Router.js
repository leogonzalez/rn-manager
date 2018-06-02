import React from "react";
// import { View, Text } from "react-native";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";

//needs one single root scene
const RouterComponent = props => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => {
              Actions.employeeCreate();
            }}
            key="employeeList"
            component={EmployeeList}
            title="Employee List"
            initial
          />

          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />

          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
