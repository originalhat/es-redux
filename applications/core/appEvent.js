export function create(type, data, appStore) {
    appStore.addEvent({
        version: 2,
        type,
        data
    });
}
