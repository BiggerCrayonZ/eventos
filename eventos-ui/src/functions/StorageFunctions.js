import json from '../data/raul.json';

class StorageFunctions {

    init() {

    }

    getEventsList() {
        return json.events;
    }
}

export default StorageFunctions;