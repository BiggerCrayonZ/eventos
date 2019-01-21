import json from '../data/raul.json';
const fs = require('fs');

class StorageFunctions {
    registry = json;
    init() {

    }

    createEvent(name, tables, spaces) {
        try {
            let event = {
                name: name,
                tables: tables,
                n_spaces: spaces,
                confirm: 0,
                guest: []
            }
            this.registry.events.push(event);

        } catch (err) {
            console.log(err);
        }
    }

    getEventsList() {
        return this.registry.events;
    }


}

export default StorageFunctions;