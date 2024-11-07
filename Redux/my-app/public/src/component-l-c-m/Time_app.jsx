import React, { Component } from 'react'

export class Time_app extends Component {
    constructor(props){//frist counstracter method will excute automaticaly
        super(props)
        console.log("frist countracter method will excute")
        this.state={
            currentTime: new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){//when render mathod excuted affter that componetdidmount will excute
        setInterval(() => {
            this.setState({currentTime:new Date().toLocaleTimeString()})
        }, 1000);
    }
  render() { //secomd render method excute
            // affter componetdidmount excte agin render method will excute
    console.log("second render method will excute")

    return<>
    {/* <h1>Employyee Component</h1> */}
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-dark text-white">
                        <h4>Time:{this.state.currentTime}</h4>
                        </div>
                        <div className="card-body"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  }
}

export default Time_app