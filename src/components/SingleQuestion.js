import React, { Component } from 'react';

class SingleQuestion extends Component {

    constructor(){
        super();
        this.onSelectAnswer = this.onSelectAnswer.bind(this);
    }

    onSelectAnswer(event){
        this.props.onSelectAnswer(event.target.value)
    }

    render() {

        const answerList = this.props.question.answers.map((answer)=>{
            return (<div className="radio">
                <label>
                    <input type="radio"
                           name={this.props.question.questionId}
                           id={answer.answerId}
                           onChange={this.onSelectAnswer}/>
                    {answer.answerValue}
                </label>
            </div>)
        });

        return (<div className="panel-body">
            <div className="well">{this.props.question.questionDescription}</div>
            {answerList}
        </div>);
    }
}

export default SingleQuestion;