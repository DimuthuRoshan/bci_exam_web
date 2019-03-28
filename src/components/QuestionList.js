import React, {Component} from 'react';

import '../style/QuestionList/style.css';
import '../style/QuestionList/bootstrap.css';
import '../style/QuestionList/font-awesome.css';
//import '../style/QuestionList/alert.css';
//import '../style/QuestionList/theme.css';

import FinishedExam from '../components/FinishedExam';

class QuestionList extends Component{
    constructor(){
        super();
        this.state = { isExamComplete: false };
        this.generateHTML = this.generateHTML.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);

    }

    onSaveClick(){
        this.setState({isExamComplete:true});
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
                        <a className="navbar-brand" href="https://www.bci.lk/"><i className="fa fa-book"></i> Online Multiple Choice Question Quiz Test</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse pull-right">
                        <ul className="nav navbar-nav">
                            <li className="active"><a className="exit-panel" href="https://www.bci.lk/"><i className="fa fa-sign-out"></i> Finish Exam</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-9">
                        <div className="question-section">
                            <div className="heading">
                                <h3>Questions for exam - <strong>MCA</strong></h3>
                            </div>
                            <div className="display-block" id="question-div1">
                                <div className="panel panel-default">
                                    <div className="panel-heading"><h3>Ouestion No. 1 Of 24</h3></div>
                                    <div className="panel-body">
                                        <div className="well">Desktop is the</div>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="answer-option1" id="optionsRadios1" value="85"/>
                                                First screen appear in Windows                                      </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="answer-option1" id="optionsRadios1" value="86"/>
                                                Last screen appear in windows                                      </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="answer-option1" id="optionsRadios1" value="87"/>
                                                Both of them                                      </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="answer-option1" id="optionsRadios1" value="88"/>
                                                None of these                                      </label>
                                        </div>
                                    </div>
                                    <div className="panel-footer">
                                        <div className="btn-group pull-left">
                                            <button disabled="disabled" data-id="0" id="prev-button1"  type="button" className="btn btn-info prev-button">Previous Question</button>
                                            <button data-id="2"  type="button" className="btn btn-danger next-button">Skip &amp; Next</button>
                                        </div>
                                        <div className="pull-right">
                                            <button type="button" onClick={this.onSaveClick}  className="btn btn-success">Save &amp; Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-3 col-lg-3" id="sidebar">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="studentinfo-timer">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <i className="fa fa-user"></i>
                                        </div>
                                        <div className="col-lg-8 col-lg-offset-1">
                                            <p><strong>Time Left</strong></p>
                                            <p></p><div id="countdown"><strong>1:38:33</strong></div><p></p>
                                            <p><em>doraa</em></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="question-palette">
                                    <p><strong>View Question Palette : </strong></p>
                                    <ul className="palette">
                                        <li id="1" className="visited">1</li>
                                        <li id="2" className="">2</li>
                                        <li id="3" className="">3</li>
                                        <li id="4" className="">4</li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="understand-palette">
                                    <p><strong>Understand Question Palette : </strong></p>
                                    <p>Visited <span className="visited"></span></p> <p>Answered <span className="answered"></span></p> <p>Not Answered <span className="not-visited"></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

    render(){

        if(!this.state.isExamComplete){
            return(this.generateHTML());
        }else{
            return(<FinishedExam/>);
        }



    }
}

export default QuestionList;