import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import { CirclePicker } from 'react-color'
import axios from 'axios'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            id: '',
            number: null,
            subIntent: '',
            value: null,
            color: '',
            background: '#fff',
            test: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
            number: nextProps.number,
            dataset: nextProps.dataset
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleUpdate = (e) => {
        const { data } = this.state
        var labelEdit = []
        var valueEdit = []
        var colorEdit = []
        {
            data.label.map((label, index) => {
                if (index !== this.state.number) {
                    labelEdit.push(label)
                } else {
                    labelEdit.push(this.state.subIntent)
                }
            })
        }
        {
            data.value.map((value, index) => {
                if (index !== this.state.number) {
                    valueEdit.push(value)
                } else {
                    valueEdit.push(this.state.value)
                }
            })
        }
        {
            data.color.map((color, index) => {
                if (index !== this.state.number) {
                    colorEdit.push(color)
                } else {
                    colorEdit.push(this.state.color)
                }
            })
        }
        // axios.put(`http://localhost:3000/PIgraph/${this.state.id}`, {
        //     color: "kkkk",
        //     data: "value",
        //     label: "label"
        // })
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

        // this.update = this.update.bind(this)
    }

    handleChangeColor = (color, event) => {
        this.setState({
            background: color.hex,
            color: color.hex
        })
    }

    update() {
        axios.put(`http://localhost:3000/PIgraph/${this.state.id}`, {
            labels: ["A"],
            datasets: [{
                data: [10],
                backgroundColor: ["#46BFBD", "#F7464A", "#949FB1", "#FDB45C", "#4D5360", "#AC64AD"],
                hoverBackgroundColor: ["#5AD3D1", "#FF5A5E", "#A8B3C5", "#FFC870", "#616774", "#DA92DB"]
            }]
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { data, number, dataset } = this.state

        return (
            <div className="modal fade" id="update" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered rec" role="document">
                    <div className="modal-content">

                        <div className="modal-body">
                            <div className="container-fluid">
                                <br />
                                <Form>
                                    {(data !== undefined) ?
                                        <div className="">
                                            <Form.Group as={Row} className="d-flex justify-content-center">
                                                <h4>{data.id}.{number}</h4>
                                            </Form.Group>

                                            <Form.Group as={Row}>
                                                <Form.Label column md="auto">
                                                    Sub-intent:
                                                </Form.Label>
                                                {/* {(data.labels !== undefined) ?
                                                    <Col sm>
                                                        <Form.Control as='input' value={data.labels[number]} id="subIntent" onChange={(e) => this.handleChange(e)} required />
                                                    </Col>
                                                    :
                                                    <Col sm>
                                                        <Form.Control as='input' value="" id="subIntent" onChange={(e) => this.handleChange(e)} required />
                                                    </Col>
                                                } */}

                                                <Form.Label column md="auto">
                                                    Value:
                                                </Form.Label>
                                                {/* {dataset.map(dataset => {
                                                    return (
                                                        <Col sm>
                                                            <Form.Control as='input' value={dataset.data[number]} id="value" onChange={(e) => this.handleChange(e)} required />
                                                        </Col>
                                                    )
                                                })} */}

                                            </Form.Group>

                                            <Form.Group as={Row} className="d-flex justify-content-center">
                                                <Form.Label column md="auto">
                                                    Color:
                                                </Form.Label>
                                                {/* {dataset.map(dataset => {
                                                    return (
                                                        <Col sm>
                                                            <Form.Control as='input' value={dataset.backgroundColor[number]} id="color" onChange={(e) => this.handleChange(e)} required />
                                                        </Col>
                                                    )
                                                })} */}
                                            </Form.Group>

                                            <div className="d-flex justify-content-center">
                                                <CirclePicker onChangeComplete={this.handleChangeColor} />
                                            </div>
                                            <br />
                                        </div>
                                        :
                                        <div className="">
                                            <Form.Group as={Row}>
                                                <h3>{this.state.id}.{this.state.number}</h3>
                                            </Form.Group>

                                            <Form.Group as={Row}>
                                                <Form.Label column md="auto">
                                                    Sub-intent:
                                                </Form.Label>
                                                <Col sm>
                                                    <Form.Control as='input' placeholder="" value="" id="subIntent" onChange={(e) => this.handleChange(e)} required />
                                                </Col>

                                                <Form.Label column md="auto">
                                                    Value:
                                                </Form.Label>
                                                <Col sm>
                                                    <Form.Control as='input' placeholder="" value="" id="value" onChange={(e) => this.handleChange(e)} required />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="d-flex justify-content-center">
                                                <Form.Label column md="auto">
                                                    Color:
                                                </Form.Label>
                                                <Col sm="4">
                                                    <Form.Control as='input' value="" id="color" onChange={(e) => this.handleChange(e)} required />
                                                </Col>
                                            </Form.Group>
                                        </div>
                                    }

                                    <Form.Group>
                                        <div className="d-flex justify-content-end">
                                            {/* <Button variant="primary" type="submit" >Update</Button> */}
                                            <button className="btn btn-primaty" onClick={() => this.update()}>Update</button>
                                            &nbsp;
                                            <Button variant="outline-secondary" data-dismiss="modal" >cancel</Button>
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