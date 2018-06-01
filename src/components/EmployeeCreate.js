import React, { Component } from "react";
import { connect } from "react-redux";
import { Picker, Text } from "react-native";
import { Input, Card, CardSection, Button } from "./common";
import { employeeUpdate } from "../actions";

class EmployeeCreate extends Component {
  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: "name", value: text })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-5555"
            value={this.props.phone}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: "phone", value: text })
            }
          />
        </CardSection>
        <CardSection style={{ flexDirection: "column" }}>
          <Text style={styles.pickerLabel}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            style={{ flex: 1 }}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="monday" />
            <Picker.Item label="Tuesday" value="tuesday" />
            <Picker.Item label="Wednesday" value="wednesday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20
  }
};
const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
