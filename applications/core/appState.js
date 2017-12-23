/* this will eventually need be able to apply complex domain relations */
export function materialize(events) {
    return events.map((event) => {
        return {data: event.data};
    });
}