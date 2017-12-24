import * as React from "react";
import Todos from "./Todos";

import * as AppCommand from "../../core/appCommand";
import WebStore from "../stores/WebStore";
import * as uuidv1 from 'uuid/v1';
import {materializedTodos} from "../../core/appState";

const webStore = new WebStore();

export default class AppContainer extends React.Component {
    render() {
        const createNewTodo = (text) => {
            AppCommand.process([
                {
                    "type": "CreateTodo",
                    "data": {
                        "text": text,
                        "completed": false,
                        "uuid": uuidv1()
                    }
                }
            ], webStore);

            this.forceUpdate(); // dirty hack till redux
        };

        return (
            <Todos todos={materializedTodos(webStore.events)} createNewTodo={createNewTodo}/>
        );
    }
}
