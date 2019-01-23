import React, { Component } from 'react';

import {
    CardHeader, Button,
    InputGroup, InputGroupText, InputGroupAddon, Input,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Components */
import AddGuest from '../forms/AddGuest';

class GuestTools extends Component {

    state = {
        modalAddGuest: false,
        inputSearch: ''
    }

    toggleModalAddGuest = () => {
        this.setState({
            modalAddGuest: !this.state.modalAddGuest
        });
    }


    sendTextToSearch = (event) => {
        let text = event.target.value;
        this.props.search(text);
    }

    render() {
        return (
            <CardHeader className="guest_header">
                <div className="guest_finder">
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText >
                                <FontAwesomeIcon icon="search" />
                            </InputGroupText>
                            <Input
                                value={this.state.value}
                                onChange={this.sendTextToSearch}
                                placeholder="Buscar invitado"
                                size="sm" />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="guest_add">
                    <Button
                        size="sm"
                        onClick={this.toggleModalAddGuest}
                        className="float-sm-right"
                        color="primary">
                        Agregar Invitado <FontAwesomeIcon icon="plus-circle" />
                    </Button>
                    {/* Modal Add Guest */}
                    <Modal
                        isOpen={this.state.modalAddGuest}
                        toggle={this.toggleModalAddGuest}
                        className={this.props.className}>
                        <ModalHeader toggle={this.toggleModalAddGuest}>Agregar Invitado</ModalHeader>
                        <ModalBody>
                            {/* Add Guest Form */}
                            <AddGuest />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggleModalAddGuest}>Añadir Invitado</Button>{' '}
                            <Button color="secondary" onClick={this.toggleModalAddGuest}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </CardHeader>
        );
    }
}

export default GuestTools;