import * as AppEvent from './AppEvent';

export function process(commands, appStore) {
    commands.forEach((command) => {
        switch (command.type) {
            case 'CreateTodo':
                AppEvent.create('CreateTodo', command.data, appStore);
                break;
            default:
                console.log('unknown AppCommand received')
        }
    });
}
