import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newChart: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            newChart: nextProps.newChart
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleAddChart = (e) => {
        axios.post('http://localhost:3000/PIgraph', {
            id: this.state.newChart
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        window.location.reload(true)
    }

    render() {
        // console.log(this.state)

        return (
            <div className="modal fade" id="addChart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered rec" role="document">
                    <div className="modal-content">

                        <div className="modal-body">
                            <div className="container-fluid">
                                <br />
                                <Form onSubmit={this.handleAddChart}>
                                    <Form.Group as={Row} className="d-flex justify-content-center">
                                        <h3>Add New Chart</h3>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column md="auto">
                                            Chart Name:
                                        </Form.Label>
                                        <Col sm>
                                            <Form.Control as='input' value={this.state.newChart} id="newChart" onChange={(e) => this.handleChange(e)} required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group>
                                        <div className="d-flex justify-content-end">
                                            <Button variant="primary" type="submit" >Add Chart</Button>
                                            &nbsp;
                                            <Button variant="outline-secondary" data-dismiss="modal" >Cancel</Button>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Modal