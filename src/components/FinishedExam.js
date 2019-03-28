import React, {Component} from 'react';

import '../style/FinishedExam/style.css';
import '../style/FinishedExam/bootstrap.css';
import '../style/FinishedExam/font-awesome.css';



class FinishedExam extends Component{
    constructor(){
        super();
        this.state = { isExamComplete: false };
        this.generateHTML = this.generateHTML.bind(this);

    }

    /**
     * Generate HTML content
     * @returns {XML}
     */
    generateHTML(){
        return(<div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="alert alert-success"><h3><i className="fa fa-smile-o"></i> Thank you! <strong>doraa</strong> for participating in Online Quiz Test. Your exam has been finished successfuly.</h3></div>
                </div>
            </div>
        </div>);
    }

    render(){


            return(this.generateHTML());




    }
}

export default FinishedExam;