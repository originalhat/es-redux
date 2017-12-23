export function create(type, data, appStore) {
    appStore.addEvent({
        type,
        data
    });
}
