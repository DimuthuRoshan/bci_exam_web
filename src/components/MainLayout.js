import React, { Component } from 'react';
import StudentLogin from './StudentLogin';
import '../style/MainLayout/style.css';

class MainLayout extends Component {
  render() {
    return (<div className="main-wrapper">
      <StudentLogin
          examPaper={this.props.examPaper}
          id_token = {this.props.id_token}
          actions={this.props.actions}  >
      </StudentLogin>
    </div>);
  }
}

export default MainLayout;