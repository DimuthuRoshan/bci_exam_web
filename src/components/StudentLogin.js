import React, {Component} from 'react';
import '../style/StudentLogin/animate.css';
import '../style/StudentLogin/style.css';
import logo from '../resources/images/BCI_logo.png';
import logoWord from '../resources/images/logo_word.png';
import QuestionPanel from '../components/QuestionPanel';
import {loginUser} from '../api/fetchData';

class StudentLogin extends Component {
    constructor() {
        super();

        this.state = {
            login_state: false,
            userName: null,
            regId: null,
            loginError: null
        };

        this.onClickLogin = this.onClickLogin.bind(this);
        this.generateHTML = this.generateHTML.bind(this);
        this.OnStudentIdChange = this.OnStudentIdChange.bind(this);
        this.OnRegIdChange = this.OnRegIdChange.bind(this);
    }

    OnStudentIdChange(event) {
        console.log("Event", event.target.value);
        this.setState({userName: event.target.value});

    }

    OnRegIdChange(event) {
        console.log("Event", event.target.value);
        this.setState({regId: event.target.value});
    }

    onClickLogin() {

        /*console.log("onClickLogin");
        console.log("User Name",this.state.userName);
        console.log("User Name",this.state.regId);*/
        let _that = this;
        let student = {
            userId: this.state.userName,
            regId: this.state.regId
        }
        loginUser(onSuccess, onError, this.props.id_token, student);

        function onSuccess(response) {

            console.log("response.data", response.data)
            console.log("User Name", _that.state.userName)
            if (response.data.loginId === _that.state.userName) {
                _that.setState({login_state: true});
            } else {
                _that.setState({loginError: "Invalid user"});
            }

        }

        function onError(response) {
            console.log(response.data);
        }
    }

    generateHTML() {
        return (<div>
            <div className="wrapper">
                <div className="logo">
                    <div className="logo-bottom">
                        <img className="img-center" src={logo} alt="BCI"/>
                    </div>

                    <div className="text-center">
                        <img className="img-center logo-word img-logo" src={logoWord} alt="BCI"/>
                    </div>
                </div>
                <div className="login">
                    <div className="sap_tabs">
                        <div id="horizontalTab" className="horizontal-Tab">
                            <ul className="resp-tabs-list">
                                <li className="resp-tab-item resp-tab-active" aria-controls="tab_item-0" role="tab">
                                    <span> Student Login</span>
                                </li>
                            </ul>

                            <div className="resp-tabs-container">
                                <div className="tab-1 resp-tab-content resp-tab-content-active display-block"
                                     aria-labelledby="tab_item-0">
                                    <div className="login-top">
                                        <input type="text" className="name active" placeholder="Student NIC"
                                               id="studentId" onChange={this.OnStudentIdChange} autoComplete="off"/>
                                        <input type="password" id="spassword" className="password"
                                               placeholder="Registration Number" onChange={this.OnRegIdChange}
                                               autoComplete="off"/>

                                        <div className="login-bottom">
                                            <div className="submit">
                                                <button className="submit-button" onClick={this.onClickLogin}>STUDENT
                                                    LOGIN
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="errorDiv">{this.state.loginError}</div>
            </div>
            <div className="footer">Online Exam System. © 2019 All Rights Reserved.</div>
        </div>);
    }

    render() {
        if (!this.state.login_state) {
            return (this.generateHTML());
        }
        else {
            return (<QuestionPanel
                examPaper={this.props.examPaper}
                id_token={this.props.id_token}
                actions={this.props.actions}>
            </QuestionPanel>);
        }

    }
}

export default StudentLogin;