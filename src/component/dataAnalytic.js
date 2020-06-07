import React, { Component } from 'react'
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class dataAnalytic extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      // dataPie: [{
      //   labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      //   datasets: [
      //     {
      //       data: [300, 50, 100, 40, 120],
      //       backgroundColor: ["#F7464A","#46BFBD","#FDB45C","#949FB1","#4D5360","#AC64AD"],
      //       hoverBackgroundColor: ["#FF5A5E","#5AD3D1","#FFC870","#A8B3C5","#616774","#DA92DB"]
      //     }
      //   ]
      // },
      // {
      //   labels: ["Red", "Green", "Grey", "Dark Grey"],
      //   datasets: [
      //     {
      //       data: [300, 50, 40, 120],
      //       backgroundColor: ["#F7464A","#46BFBD","#FDB45C","#949FB1","#4D5360","#AC64AD"],
      //       hoverBackgroundColor: ["#FF5A5E","#5AD3D1","#FFC870","#A8B3C5","#616774","#DA92DB"]
      //     }
      //   ]
      // }]
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

  render() {
    const { dataPie, data } = this.state
    console.log(this.state.data)

    return (
      <MDBContainer>
        {data && data.map((data, index) => {
          return (
            <div>
              <h3 className="mt-5">{data.id}</h3>
              <Pie data={data} options={{ responsive: true }} />
            </div>
          )
        })}
      </MDBContainer>
    );
  }

}

export default dataAnalytic