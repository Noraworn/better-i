import React, { Component } from 'react'
import Modalupdate from './update'
import ModaladdChart from './addChart'
import axios from 'axios'

class entity extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const response = await fetch(
            `http://localhost:3000/PIgraph`,
            {
                "method": "GET"
            }
        )
        const json = await response.json()
        this.setState({ data: json })
    }

    deleteChart = (id) => {
        axios.delete(`http://localhost:3000/PIgraph/${id}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        window.location.reload(true)
    }

    addChart = () => {
        this.setState({
            newChart: ''
        })
    }

    edit = (data, index, dataset) => {
        this.setState({
            detail: data,
            number: index,
            dataset: dataset
        })
    }

    render() {
        const { data } = this.state
        // console.log(this.state.data)
        // console.log(this.state.test)

        if (!this.state.data) {
            return (
                <div className="">
                    <div className="d-flex justify-content-end" >
                        <button className="btn btn-primary" data-toggle="modal" data-target="#addChart"
                            onClick={() => this.addChart()}>Add chart</button>
                    </div>
                    <div className="d-flex justify-content-center">No data...</div>
                </div>
            )
        }

        return (
            <div className="row justify-content-md-center">
                <div className="col-8">
                    <br />
                    <div className="d-flex justify-content-end" >
                        <button className="btn btn-primary" data-toggle="modal" data-target="#addChart"
                            onClick={() => this.addChart()}>+ chart</button>
                    </div>
                    <br />

                    {data && data.map((data) => {
                        // console.log(data)
                        return (
                            <div className="">
                                <div className="row">
                                    <div className="col">
                                        <h2>{data.id}</h2>
                                    </div>
                                    <div className="col d-flex justify-content-end">
                                        <button className="btn btn-danger" onClick={() => this.deleteChart(data.id)}>Delete {data.id}</button>
                                    </div>
                                </div>
                                <h5 />

                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Sub-intents</th>
                                            <th scope="col">Value</th>
                                            <th scope="col">Color</th>
                                            <th scope="col" className="d-flex justify-content-end">
                                                <button className="btn btn-success" onClick={() => this.addSubIntent()}>+ Sub-intent</button>
                                            </th>
                                        </tr>
                                    </thead>
                                    {(data.labels !== undefined) ?
                                        <tbody>
                                            {data.labels.map((label, index) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{label}</th>
                                                        {data.datasets.map(dataset => {
                                                            return (
                                                                <td>{dataset.data[index]}</td>
                                                            )
                                                        })}
                                                        {data.datasets.map(dataset => {
                                                            return (
                                                                <td style={{ color: dataset.backgroundColor[index] }}><li>color</li></td>
                                                            )
                                                        })}
                                                        <td>
                                                            <div className="text-right ">
                                                                <button className="btn btn-warning" data-toggle="modal" data-target="#update"
                                                                    onClick={() => this.edit(data, index, data.datasets)}> Edit </button>
                                                                {' / '}
                                                                <button className="btn btn-secondary" onClick={() => this.delete}> Delete </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                        :
                                        <tbody>
                                            <tr>
                                                <th scope="row">-</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td> </td>
                                            </tr>
                                        </tbody>
                                    }
                                </table>
                            </div>
                        )
                    })}
                </div>

                <Modalupdate
                    data={this.state.detail}
                    number={this.state.number}
                    dataset={this.state.dataset}
                />
                <ModaladdChart
                    newChart={this.state.newChart}
                />
            </div>
        )
    }
}

export default entity