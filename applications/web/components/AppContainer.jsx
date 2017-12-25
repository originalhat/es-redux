import * as React from 'react'
import Todos from './Todos'

export default class AppContainer extends React.Component {
    render() {
        const createNewTodo = (text, uuid) => this.props.store.dispatch({
            type: 'CreateTodo',
            draft: true,
            text,
            uuid,
        });

        return (
            <Todos todos={this.props.store.getState().todos} createNewTodo={createNewTodo}/>
        );
    }
}
