import React, { Component } from "react";
// import { View, Text } from "react-native";
import { Input, Card, CardSection, Button } from "./common";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Name" placeholder="Jane" />
        </CardSection>
        <CardSection>
          <Input label="Phone" placeholder="555-5555" />
        </CardSection>
        <CardSection>
          <Input label="Shift" placeholder="Wednesday" />
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
