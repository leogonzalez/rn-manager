import React, { Component } from "react";
// import { View, Text } from "react-native";
import { connect } from "react-redux";
import { CardSection, Card, Button } from "./common";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdate, employeeSave } from "../actions";

class EmployeeEdit extends Component {
  componentWillMount() {
    Object.keys(this.props.employee).map(prop => {
      return this.props.employeeUpdate({ prop, value: this.props.employee[prop] });
    });
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name,
    phone,
    shift
  };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
