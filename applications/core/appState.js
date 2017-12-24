export function materializedTodos(events) {
    return events.filter((event) => {
        return event.type === 'CreateTodo'
    }).map((event) => {
        return event.data;
    });
}
