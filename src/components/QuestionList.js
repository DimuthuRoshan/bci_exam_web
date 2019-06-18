import React, {Component} from 'react';

import '../style/QuestionList/style.css';
import '../style/QuestionList/bootstrap.css';
import '../style/QuestionList/font-awesome.css';
import SingleQuestion from './SingleQuestion';
import FinishedExam from '../components/FinishedExam';

class QuestionList extends Component{
    constructor(){
        super();
        this.state =
            { isExamComplete: false ,
                totalQuestions:0,
                currentCounter:0,
                currentQuestionId:null,
                saveNextBtnIsDisabled:true
            };
        this.generateHTML = this.generateHTML.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onAnswerSelect = this.onAnswerSelect.bind(this);
    }


    onSaveClick(){
        console.log("Quest counter ",this.state.currentCounter+1 )
        console.log("this.props.questions.length ",this.props.questions.length );
        if((this.state.currentCounter+1) < this.props.questions.length ){
            let counter = this.state.currentCounter + 1;
            this.setState({
                currentCounter:counter,
                currentQuestionId:this.props.questions[counter].questionId,
                saveNextBtnIsDisabled:true
            });
        }else{
            this.setState({isExamComplete:true});
        }
    }

    onAnswerSelect(answerId){
        console.log("QuestionList",answerId)
        if(answerId && answerId !== null)
            this.setState({saveNextBtnIsDisabled:false});
    }

    /**
     * Generate HTML content
     * @returns {XML}
     */
    generateHTML(){

        var counter = 0;
        var cssClass = null;
        const list = this.props.questions.map((question)=>{
            counter++;
            return (<li key={question.questionId} id="1" className={cssClass}>{counter}</li>)
        });

        return(<div>
            <nav className="navbar navbar-fixed-top navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="https://www.bci.lk/"><i className="fa fa-book"></i> Examination Center - BCI</a>
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
                        <div className="understand-palette-custom understand-palette-margin-top">
                            <p className="color-label-width">Visited <span className="visited"></span></p>
                            <p className="color-label-width">Answered <span className="answered"></span></p>
                            <p className="color-label-width">Not Answered <span className="not-visited"></span></p>
                        </div>
                        <div className="question-section">
                            <div className="heading">
                                <h3>Questions for exam - <strong>MCA</strong></h3>
                            </div>
                            <div className="display-block" id="question-div1">
                                <div className="panel panel-default">
                                    <div className="panel-heading"><h3>Ouestion No. {this.state.currentCounter+1} Of {this.props.questions.length}</h3></div>
                                    <SingleQuestion
                                        question={this.props.questions[this.state.currentCounter]}
                                        onSelectAnswer={this.onAnswerSelect}/>
                                    <div className="panel-footer">
                                        <div className="btn-group pull-left">
                                            <button disabled="disabled" data-id="0" id="prev-button1"  type="button" className="btn btn-info prev-button">Previous Question</button>
                                            <button data-id="2"  type="button" className="btn btn-danger next-button">Skip &amp; Next</button>
                                        </div>
                                        <div className="pull-right">
                                            <button type="button" onClick={this.onSaveClick}  className={this.state.saveNextBtnIsDisabled ? "btn btn-success disabled":"btn btn-success"}>Save &amp; Next</button>
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
                                        {list}
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

    /**
     * React lifeCycle method
     */
    componentDidMount(){
        this.setState({currentQuestionId:this.props.questions[0].questionId});
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