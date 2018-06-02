import React, { Component } from "react";
// import { Modal} from "react-native";
import { connect } from "react-redux";
import { CardSection, Card, Button } from "./common";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdate, employeeSave } from "../actions";
import Communications from 'react-native-communications'

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

  onTextPress(){
    const {phone, shift} = this.props
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
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
