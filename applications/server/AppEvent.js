import * as AppDatabase from "./AppDatabase";

export function create(type, data) {
    AppDatabase.setEvents([{
        version: 1,
        type,
        data
    }]);
}
