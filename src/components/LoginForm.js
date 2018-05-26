import React, { Component } from "react";
import { connect } from "react-redux";
// import { View, Text } from "react-native";
import { emailChanged } from "../actions";
import { Card, CardSection, Button, Input } from "./common";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            label="Email"
            placeholder="test@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />;
        </CardSection>

        <CardSection>
          <Input label="Password" placeholder="password" secureTextEntry />;
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
