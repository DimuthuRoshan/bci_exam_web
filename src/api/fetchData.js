import axios from 'axios';

export function getToken(getTokenOnSuccess, getTokenOnError) {

    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.post('http://localhost:8080/api/authenticate', {
        "password": "admin",
        "rememberMe": false,
        "username": "admin"
    }, config)
        .then(function (response) {
            getTokenOnSuccess(response);
        })
        .catch(function (error) {
            getTokenOnError(error);
        });
}

export function processExam(onSuccess, onError, token) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    axios.post('http://localhost:8080/api/process-exams', {
        "examId": "ENT-2019-Q1",
        "studentId": "2356"
    }, config)
        .then(function (response) {
            onSuccess(response);
        })
        .catch(function (error) {
            onError(error);
        });
}

export function loginUser(onSuccess, onError, token, student) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    axios.get('http://localhost:8080/api/loggins/' + student.userId + '/' + student.regId + '/' + student.examType, config)
        .then(function (response) {
            onSuccess(response);
        })
        .catch(function (error) {
            onError(error);
        });
}

export function getStudentData(onSuccess, onError, token, studentId){

    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    axios.get('http://localhost:8080/api/students/' + studentId , config)
        .then(function (response) {
            onSuccess(response);
        })
        .catch(function (error) {
            onError(error);
        });
}