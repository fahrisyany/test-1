import React, { Component } from "react";
import "../styles/css/main.css";
import NavigationBar from "../components/layout/NavigationBar";
import Dashboard from "../components/layout/Dashboard";
import { configureStore, history } from "../components/sagas/store";
import { Provider } from "react-redux";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <NavigationBar />
          <Dashboard />
        </Provider>
      </>
    );
  }
}

export default App;
