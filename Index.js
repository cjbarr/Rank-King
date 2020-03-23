
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} = require('mongodb-stitch-browser-sdk');

const client = Stitch.initializeDefaultAppClient('rank-stitch-hyyrw');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('rankdb');

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


const dbReducer = (state = db) => {
            return state;
}



function* watcherSaga() {
    

}//watcher function intercepts our dispatches from the client

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        dbReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
);


sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
