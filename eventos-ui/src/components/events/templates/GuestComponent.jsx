import React, { Component } from 'react';

import { Card } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Components */
import GuestTools from './GuestTools';
import GuestList from './GuestList';

class GuestComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: props.event.guest
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({ list: nextProps.event.guest });
    }

    searchGuest = (guest) => {
        let guestArray = this.props.event.guest;
        let resArray = [];
        for (let i = 0; i < guestArray.length; i++) {
            if (guestArray[i].name.indexOf(guest) !== -1) {
                resArray.push(guestArray[i]);
            }
        }
        this.setState({ list: resArray });
    }

    render() {
        return (
            <Card className="guest_container">
                <GuestTools
                    event={this.props.event}
                    search={this.searchGuest} />
                <GuestList
                    list={this.state.list} />
            </Card>
        )
    }
}

export default GuestComponent;