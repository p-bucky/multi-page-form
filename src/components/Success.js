import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Welcome To App" />
          <h1>Website Feed</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
