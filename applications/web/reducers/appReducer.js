import {combineReducers} from "redux";
import * as React from "react";

export const rootReducer = combineReducers({
    todos
});

function todos(state = [], action) {
    switch (action.type) {
        case 'CreateTodo':
        case 'CreateTodoSucceeded':
            return [...state.filter(e => e.uuid !== action.uuid), {
                draft: action.draft,
                text: action.text,
                uuid: action.uuid
            }];
        case 'CreateTodoFailed':
            console.log('failure');
            return state;
        default:
            return state;
    }
}
