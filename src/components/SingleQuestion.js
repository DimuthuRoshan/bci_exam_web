import React, { Component } from 'react';

class SingleQuestion extends Component {
    render() {

        return (<div className="panel-body">
            <div className="well">{this.props.question.questionDescription}</div>
            <div className="radio">
                <label>
                    <input type="radio" name="answer-option1" id="optionsRadios1" value="85"/>
                    {this.props.question.answers[0].answerValue}
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="answer-option1" id="optionsRadios1" value="86"/>
                    {this.props.question.answers[1].answerValue}
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="answer-option1" id="optionsRadios1" value="87"/>
                    {this.props.question.answers[2].answerValue}
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="answer-option1" id="optionsRadios1" value="88"/>
                    {this.props.question.answers[3].answerValue}
                </label>
            </div>
        </div>);
    }
}

export default SingleQuestion;