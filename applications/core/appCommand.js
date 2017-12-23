import * as AppEvent from './appEvent';

export function process(commands, store) {
    commands.forEach((command) => {
        switch (command.type) {
            case 'CreateTodo':
                AppEvent.create('CreateTodo', command.data, store);
                break;
            default:
                console.log('unknown AppCommand received')
        }
    });
}
