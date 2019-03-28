import React, {Component} from 'react';
import '../style/StudentLogin/animate.css';
import '../style/StudentLogin/style.css';
import logo from '../resources/images/BCI_logo.png';
import logoWord from '../resources/images/logo_word.png';
import QuestionPanel from '../components/QuestionPanel';

class StudentLogin extends Component{
    constructor(){
        super();

        this.state = { login_state: false };

        this.onClickLogin = this.onClickLogin.bind(this);
        this.generateHTML = this.generateHTML.bind(this);
    }

    onClickLogin(){
        console.log("onClickLogin");
        this.setState({login_state:true});
    }

    generateHTML(){
        return(<div>
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
                                <div className="tab-1 resp-tab-content resp-tab-content-active display-block" aria-labelledby="tab_item-0">
                                    <div className="login-top">
                                        <input type="text" className="name active" placeholder="Student Id" id="sid" name="sid"  autoComplete="off"/>
                                        <input type="password" id="spassword" name="password" className="password" placeholder="Password"  autoComplete="off"/>

                                        <div className="login-bottom">
                                            <div className="submit">
                                                <button className="submit-button" onClick={this.onClickLogin}>STUDENT LOGIN</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">Online Exam System. © 2019 All Rights Reserved.</div>
        </div>);
    }

    render(){
        if(!this.state.login_state){
            return(this.generateHTML());
        }
        else {
            return(<QuestionPanel/>);
        }

    }
}

export default StudentLogin;