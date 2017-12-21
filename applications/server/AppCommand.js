import * as AppEvent from './AppEvent';

export function process(commands) {
    commands.forEach((command) => {
        switch (command.type) {
            case 'CreateTodo':
                AppEvent.create('CreateTodo', new CreateTodo(command.payload));
                break;
            default:
                console.log('unknown command received')
        }
    });
}

class CreateTodo {
    constructor({text, completed}) {
        this.text = text;
        this.completed = completed;
    }
}
