import React, {Component} from 'react';

import '../style/QuestionPanel/style.css';
import '../style/QuestionPanel/bootstrap.css';
import '../style/QuestionPanel/font-awesome.css';
import {processExam} from '../api/fetchData';


import QuestionList from '../components/QuestionList';

class QuestionPanel extends Component{
    constructor(){
        super();
        this.state = { isExamStarted: false };
        this.generateHTML = this.generateHTML.bind(this);
        this.onClickStart = this.onClickStart.bind(this);
    }

    onClickStart(){
        let _that = this;
        console.log("onClickStart");
        processExam(onSuccess,onError,this.props.id_token);

        function onSuccess(response){
            console.log("Question Panel",response.data);
            _that.props.actions.getQuestions(response.data)

            _that.setState({
                isExamStarted:true
            });
        }

        function onError(error){
            console.log("Question Panel",error);
        }
    }

    /**
     * Generate HTML content
     * @returns {XML}
     */
    generateHTML(){
        return(<div>
                    <nav className="navbar navbar-fixed-top navbar-inverse">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="https://www.bci.lk/"><i className="fa fa-book"></i> Examination Centre - BCI</a>
                            </div>
                            <div id="navbar" className="collapse navbar-collapse pull-right">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a className="exit-panel" href="https://www.bci.lk/"><i className="fa fa-sign-out"></i> Exit Exam</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 exam-info-panel-outer">
                                <div className="exam-info-panel student-details">
                                    <div className="heading">
                                        <h3>Student Details</h3>
                                    </div>
                                    <p><strong>Student Name : </strong>doraa</p>
                                    <p><strong>Student Id : </strong>{this.props.examPaper.studentId}</p>
                                    <p><strong>Exam Name  : </strong>{this.props.examPaper.examId}</p>
                                    <p><strong>Exam Duration : </strong>99 Minutes</p>
                                    <p><strong>Total No. Of Questions : </strong>24</p>

                                    <p><button type="button" onClick={this.onClickStart}  className="btn btn-success">Start My Online Test</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
    }

    render(){
        console.log("sdsddssssssssssssss",this.props.examPaper)
        if(!this.state.isExamStarted){
            return(this.generateHTML());
        }else{
            return(<QuestionList questions={this.props.examPaper.questions}/>);
        }

    }
}

export default QuestionPanel;