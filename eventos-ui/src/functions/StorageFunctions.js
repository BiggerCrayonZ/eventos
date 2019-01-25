import json from '../data/raul.json';
const fs = require('fs');

class StorageFunctions {
    registry = json;
    init() {

    }

    createEvent(name, tables, spaces) {
        let array = this.registry.events;
        let lastItem = array[array.length - 1];
        let newId = lastItem.id + 1;
        try {
            let event = {
                id: newId,
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

    createGuest(event, name, n_guest, assign_tables) {
        this.registry.events.map((item, index) => {
            if (item.id === event.id) {
                let newGuest = {
                    name,
                    status: false,
                    n_guest,
                    assign_tables
                }
                this.registry.events[index].guest.push(newGuest);
                console.log(newGuest);
                return true;
            } else {
                return false;
            }
        })
    }

    getEventsList() {
        return this.registry.events;
    }


}

export default StorageFunctions;