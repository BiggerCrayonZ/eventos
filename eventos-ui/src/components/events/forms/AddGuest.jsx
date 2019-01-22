import React, { Component } from 'react';

import {
    InputGroup, InputGroupText, InputGroupAddon, Input,
    Form, FormGroup, Label, Col, Row
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddGuest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 1,
            name: '',
            guest: '',

        }
    }

    render() {
        return (
            <div className="form_create_event">
                <Form>
                    <FormGroup>
                        <Label for="eventName">Nombre del Invitado</Label>
                        <Input
                            type="text"
                            maxLength="16"
                            name="name"
                            id="eventName"
                            placeholder="Max. 16 caracteres"
                            onChange={(event) => {
                                this.setState({ name: event.target.value });
                            }} />
                    </FormGroup>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label
                                    for="noGuest">Numero de Acompañantes</Label>
                                <Input
                                    placeholder="Max. 10 personas"
                                    type="number"
                                    name="noGuest"
                                    id="noGuest"
                                    onChange={(event) => {
                                        this.setState({ guest: event.target.value });
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <Label for="total">Total de Invitados</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon="users" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    id="total"
                                    value={this.state.guest }
                                    disabled />
                            </InputGroup>
                        </Col>
                        <Col md={5}>
                            <Label for="table">Mesa Asignada</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        5 Disponibles
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    type="select"
                                    name="table"
                                    id="table">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Input>
                            </InputGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default AddGuest;