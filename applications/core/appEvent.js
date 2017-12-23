export function create(type, data, store) {
    store.addEvent({
        type,
        data
    });
}
