import * as React from 'react';
import * as uuidv1 from 'uuid/v1';

export default class Todos extends React.Component {
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                {this.props.todos.map((todo) => {
                    return (
                        <div key={todo.uuid}>
                            <span>{todo.draft ? 'unsaved' : 'saved'}</span>
                            <span>&nbsp;•&nbsp;</span>
                            <span>{todo.text}</span>
                        </div>
                    )
                })}

                <input type="text" onKeyUp={this.handleCreateNewTodo.bind(this)}/>
            </div>
        )
    }

    handleCreateNewTodo(e) {
        let isEnter = (e.which === 13 || e.keyCode === 13);

        if (isEnter) {
            this.props.createNewTodo(e.target.value, uuidv1());
            e.target.value = '';
        }
    }
}