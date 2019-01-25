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

    setFlag = (flag) => { this.setState({ flag }); }

    setName = (value) => { this.setState({ name: value }); }
    setTotal = (value) => { this.setState({ total: value }); }
    setEmpty = (value) => {
        let spaceLimit = this.props.event.n_spaces;
        let spaceSum = 0;
        for (let i = 0; i < this.props.event.guest.length; i++) {
            const element = this.props.event.guest[i];
            if (element.assign_tables === parseInt(value)) {
                spaceSum = spaceSum + element.n_guest;
            }
        }
        const res = (spaceLimit - spaceSum);
        this.setState({ empty: res });
    }

    componentDidMount() { this.setEmpty(0); }

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
                        <ModalHeader
                            toggle={this.toggleModalAddGuest}>Agregar Invitado {this.state.empty}
                        </ModalHeader>
                        <ModalBody>
                            {/* Add Guest Form */}
                            <AddGuest
                                setName={this.setName}
                                setTotal={this.setTotal}
                                empty={this.state.empty}
                                setEmpty={this.setEmpty}
                                event={this.props.event}
                                flag={this.setFlag} />
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