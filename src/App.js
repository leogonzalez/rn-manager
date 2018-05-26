import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import reducers from "./reducers";
import { config } from "./config/keys";

import LoginForm from './components/LoginForm'

const store = createStore(reducers);

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
