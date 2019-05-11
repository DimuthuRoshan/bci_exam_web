import React, {Component} from 'react';
import {connect} from "react-redux";
import MainLayout from './components/MainLayout';
import {getToken} from './api/fetchData';
import {bindActionCreators} from 'redux';
import {setTokenState, getQuestuins, setStudentLoginData} from './actions';

class App extends Component {

    componentDidMount() {
        let _that = this;
        getToken(getTokenOnSuccess, getTokenOnError);

        function getTokenOnSuccess(response) {
            _that.props.actions.setToken(response.data);
        };

        function getTokenOnError(error) {
            console.log("App", error);
        };
    }

    render() {
        return (<div>
            <MainLayout examPaper={this.props.examPaper}
                        id_token={this.props.id_token}
                        student={this.props.studentLogin}
                        actions={this.props.actions}>
            </MainLayout>
        </div>);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            setToken: setTokenState,
            getQuestions: getQuestuins,
            setLoginStudent: setStudentLoginData
        }, dispatch)
    }
}

const mapStateToProps = state => {
    return {
        examPaper: state.examPaper,
        id_token: state.app_config.id_token,
        studentLogin: state.login
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

