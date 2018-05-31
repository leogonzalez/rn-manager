import React, { Component } from "react";
import { connect } from "react-redux";
// import { View, Text } from "react-native";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Card, CardSection, Button, Input } from "./common";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({email,password})
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
          <Input
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
            label="Password"
            placeholder="password"
            secureTextEntry
          />;
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
