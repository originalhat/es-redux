import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'
import AppContainer from './components/AppContainer';
import {rootReducer} from './reducers/appReducer';
import appSaga from "./sagas/appSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,
    applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(appSaga);

function renderApp() {
    ReactDOM.render(
        <AppContainer store={store}/>,
        document.getElementById('root')
    );

}

store.subscribe(() => {
    renderApp();
});


renderApp();
