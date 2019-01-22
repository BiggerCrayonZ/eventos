import React, { Component } from 'react';

import { Card, CardBody, Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GuestList extends Component {

    renderGuestList = () => {
        let guestArray = [];
        for (let i = 0; i < this.props.list.length; i++) {
            const element = this.props.list[i];
            guestArray.push(
                <Card key={i} className="guest_card">
                    <div className="guest_title">{element.name}</div>
                    <div className="guest_tables">{element.assign_tables}</div>
                    <div className="guest_subguest">{element.n_guest}</div>
                    <div className="guest_tools">
                        <Button size="sm" color="warning"> <FontAwesomeIcon icon="edit" /> </Button>
                        <Button size="sm" color="danger"> <FontAwesomeIcon icon="trash" /> </Button>
                    </div>
                </Card>
            );
        }
        return guestArray;
    }

    render() {
        return (
            <CardBody className="guest_list" >
                {/* GuestList */}
                <div className="guest_list_header">
                    <div>Nombre: </div>
                    <div>Mesa: </div>
                    <div>Invitados: </div>
                    <div>Editar/Eliminar: </div>
                </div>
                <div className="guest_list_container">
                    {this.renderGuestList()}
                </div>
            </CardBody>
        );
    }
}

export default GuestList;