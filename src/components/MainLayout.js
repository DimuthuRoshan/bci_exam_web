import React, { Component } from 'react';
import StudentLogin from './StudentLogin';
import '../style/MainLayout/style.css';

class MainLayout extends Component {
  render() {
    return (<div className="main-wrapper">
      {/*this.props.text*/}
      <StudentLogin></StudentLogin>
    </div>);
  }
}

export default MainLayout;
