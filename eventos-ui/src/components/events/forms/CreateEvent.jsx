import React, { Component } from 'react';

import { Input, Form, FormGroup, Label, Col, Row } from 'reactstrap';

class CreateEvent extends Component {

    handleChangeNameField = (event) => {
        const text = event.target.value;
        this.props.changeName(text);
    }

    handleChangeTablesField = (event) => {
        const text = event.target.value;
        this.props.changeTables(text);
    }

    handleChangeSpacesField = (event) => {
        const text = event.target.value;
        this.props.changeSpaces(text);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="eventName">Nombre del Evento</Label>
                    <Input 
                        onChange={this.handleChangeNameField} 
                        type="text" 
                        name="name" 
                        id="eventName" 
                        placeholder="Reunion, Fiesta, Boda..." />
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="noTables">Numero de Mesas</Label>
                            <Input 
                                onChange={this.handleChangeTablesField} 
                                type="number" 
                                name="tables" 
                                id="noTables"
                                min={4}
                                max={100} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="spaces">Espacios por Mesa</Label>
                            <Input onChange={this.handleChangeSpacesField} type="select" name="spaces" id="spaces">
                                <option>8</option>
                                <option>10</option>
                                <option>12</option>
                                <option>14</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default CreateEvent;