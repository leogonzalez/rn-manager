import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import { keys } from "./config/keys";

import LoginForm from "./components/LoginForm";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(keys);
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
