import * as database from "./AppDatabase";

export function create(type, data) {
    database.setEvents([{
        version: 1,
        type,
        data
    }]);
}
