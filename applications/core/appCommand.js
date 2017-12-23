import * as AppEvent from './appEvent';
import {Todo} from "./appValidator";

export function process(commands, store) {
    commands.forEach((command) => {
        switch (command.type) {
            case 'CreateTodo':
                if (Todo.isValid(command.data)) {
                    AppEvent.create('CreateTodo', command.data, store);
                }
                break;
            default:
                console.log('unknown AppCommand received')
        }
    });
}
