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
            studentId: null,
            userName: null,
            regId: null,
            loginError: null,
            examType: null,
        };

        this.onClickLogin = this.onClickLogin.bind(this);
        this.generateHTML = this.generateHTML.bind(this);
        this.OnStudentIdChange = this.OnStudentIdChange.bind(this);
        this.OnRegIdChange = this.OnRegIdChange.bind(this);
        this.OnSelectExam = this.OnSelectExam.bind(this);
        // this.getStudentData = this.getStudentData.bind(this);
    }

    /*getStudentData(studentId){
        //let _that = this;
        //getStudentData(onSuccess,onError,this.props.id_token,studentId)
    }*/

    OnSelectExam(event) {
        console.log(event.target.value)
        this.setState({examType: event.target.value});
    }

    OnStudentIdChange(event) {
        this.setState({userName: event.target.value});

    }

    OnRegIdChange(event) {
        this.setState({regId: event.target.value});
    }

    onClickLogin() {

        let _that = this;
        let student = {
            userId: this.state.userName,
            regId: this.state.regId,
            examType: this.state.examType
        }
        loginUser(onSuccess, onError, this.props.id_token, student);

        function onSuccess(response) {
            if (response.data.loginId === _that.state.userName) {
                _that.setState(
                    {
                        login_state: true,
                        studentId: response.data.loginId
                    });
                _that.props.actions.setLoginStudent(response.data);
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

                                        <select id="course_id" onChange={this.OnSelectExam}>
                                            <option defaultValue="Select A Exam">Select A Exam</option>
                                            <option value="ENT-2019-Q1">ENT-2019-Q1</option>
                                            <option value="TEST_EXAM">TEST_EXAM</option>
                                        </select>


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
                studentId={this.state.studentId}
                examType={this.state.examType}
                student={this.props.student}
                actions={this.props.actions}>
            </QuestionPanel>);
        }

    }
}

export default StudentLogin;