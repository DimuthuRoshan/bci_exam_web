import React, { Component } from 'react';
import { connect } from "react-redux";
import MainLayout from './components/MainLayout';

class App extends Component {

  render() {
    console.info("this.props.greettings",this.props.greettings);
    return (<div>
      <MainLayout text={this.props.greettings}></MainLayout>
      </div>);
  }
}

const mapStateToProps = state => {
  return { greettings: state.test };
};
export default connect(mapStateToProps)(App);

