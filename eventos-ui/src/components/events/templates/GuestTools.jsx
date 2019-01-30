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
        inputSearch: '',
        name: '',
        total: 0,
        empty: 0,
        flag: false
    }

    toggleModalAddGuest = () => {
        this.setState({
            modalAddGuest: !this.state.modalAddGuest,
            flag: false
        });
    }


    sendTextToSearch = (event) => {
        let text = event.target.value;
        this.props.search(text);
    }

    evaluateForm = () => {
        if (this.state.name.length > 0 && this.state.total > 0 && this.state.tableEmptySpaces > 0) {
            if (this.evaluateSpaces()) {
                this.props.flag(true);
            } else {
                this.props.flag(false);
            }
        } else {
            this.props.flag(false);
        }
    }

    evaluateSpaces = () => {
        if (this.state.tableEmptySpaces >= this.state.total) {
            return true;
        } else { return false; }
    }

    

    /*  */

    setName = (event) => {
        this.setState({ name: event.target.value });
    }

    setTotal = (event) => {
        this.setState({ total: event.target.value });
    }

    setEmpty = (event) => {
        this.setState({ empty: event.target.value });
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
                        <ModalHeader toggle={this.toggleModalAddGuest}>Agregar Invitado </ModalHeader>
                        <ModalBody>
                            {/* Add Guest Form */}
                            <AddGuest
                                setName={this.setName}
                                setTotal={this.setTotal}
                                setEmpty={this.setEmpty}
                                event={this.props.event}
                                 />
                        </ModalBody>
                        <ModalFooter>
                            {this.state.flag ? <Button color="primary" onClick={this.toggleModalAddGuest}>Añadir Invitado</Button> : null}
                            <Button color="secondary" onClick={this.toggleModalAddGuest}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </CardHeader>
        );
    }
}

export default GuestTools;