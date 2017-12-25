import {put, takeEvery} from 'redux-saga/effects'
import WebStore from "../stores/WebStore";
import * as React from "react";
import * as AppCommand from "../../core/appCommand";

const webStore = new WebStore();

export default function* appSaga() {
    yield takeEvery('CreateTodo', createTodo);
}

function* createTodo(action) {
    try {

        // this is where we do side effects

        yield AppCommand.process([
            {
                'type': 'CreateTodo',
                'data': {
                    'text': action.text,
                    'completed': false,
                    'uuid': action.uuid
                }
            }
        ], webStore);

        yield put({
            type: 'CreateTodoSucceeded',
            draft: false,
            text: action.text,
            uuid: action.uuid
        });
    } catch (e) {
        yield put({type: 'CreateTodoFailed'});
    }
}

