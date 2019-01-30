import initialState from './initialState';


export default function eventReducer(state = initialState.events, action) {
    switch (action.type) {

        /* Add contacts to the state array */

        case "CREATE_EVENT": {
            return {
                ...state,
                contactList: [...state.contactList, state.newContact]
            }
        }

        default: return state;
    }
}