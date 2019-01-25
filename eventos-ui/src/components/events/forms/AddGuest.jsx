import React, { Component } from 'react';

import {
    InputGroup, InputGroupText, InputGroupAddon, Input,
    Form, FormGroup, Label, Col, Row
} from 'reactstrap';

class AddGuest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            event: props.event,
            tableEmptySpaces: 0
        }
    }

    renderTablesAsigned = () => {
        let array = [];
        for (let i = 0; i <= this.state.event.tables; i++) {
            array.push(<option key={i}>{i}</option>);
        }
        return array;
    }

    render() {

        return (
            <div className="form_create_event">
                <Form>
                    <FormGroup>
                        <Label for="eventName">Nombre del Invitado </Label>
                        <Input
                            type="text"
                            maxLength="16"
                            name="name"
                            id="eventName"
                            placeholder="Max. 16 caracteres"
                            onChange={(event) => {
                                this.props.setName(event.target.value)
                            }} />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label
                                    for="noGuest">Numero de Acompañantes</Label>
                                <Input
                                    placeholder={
                                        'Max. ' +
                                        this.props.empty +
                                        ' personas'}
                                    max={this.props.empty}
                                    min={1}
                                    type="number"
                                    name="noGuest"
                                    id="noGuest"
                                    onChange={(event) => {
                                        this.props.setTotal(event.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <Label for="table">Mesa Asignada</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        {this.props.empty} Disponibles
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    type="select"
                                    name="table"
                                    id="table"
                                    onChange={(event) => {
                                        this.props.setEmpty(event.target.value)
                                    }}>
                                    {this.renderTablesAsigned()}
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