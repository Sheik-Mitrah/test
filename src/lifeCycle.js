import React, { Component, useEffect } from "react";
import { ErrorBoundary } from "./errorBoundary";



const CycleAFun = ({ number, color }) => {
  // useEffect(() => {
  //   throw new Error('oiam sgheikk')
  // })
  return (
    <div style={{ backgroundColor: color }}>{number} </div>
  )
}


const FallBack = () => {

  return (
    <div>fall backkk it</div>
  )
}

class CycleClass extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(a, b) {
    console.log("LifecycleA componentWillUnmount", a, b);
    throw new Error('oiam sgheikk')
  }

  render() {
    console.log("CycleClass ", this.props);
    return (
      <div>
        <div style={{ backgroundColor: this.props.color }}>{this.props.number} </div>
      </div>
    );
  }
}



class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameState: "Vishwas",
      count: 0,
      color: 'red'
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps", props, state);
    if (state.count == 5) {
      return { ...state, color: 'blue' }
    } else if (state.count == 10) {
      return { ...state, color: 'green' }
    } else if (state.count == 15) {
      return { ...state, color: 'yellow' }
    }
    else if (state.count == 20) {
      return { ...state, color: 'orange' }
    }

    return null
    return { ...state, ...props, gds: 1 };
  }

  componentDidMount(a, b) {
    console.log("LifecycleA componentDidMount", a, b);
  }

  shouldComponentUpdate(a, b) {
    console.log("LifecycleA shouldComponentUpdate", a, b);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState, a, b) {
    console.log("LifecycleA getSnapshotBeforeUpdate", prevProps, prevState, a, b);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleA componentDidUpdate");
  }
  componentWillUnmount(a, b) {
    console.log("LifecycleA componentWillUnmount", a, b);
  }

  changeState = () => {
    this.setState({
      ...this.state, count: this.state.count + 1
    });
  };

  render() {
    console.log("LifecycleA render", this.state);
    return (
      <div>
        <button onClick={this.changeState}>Change state</button>
        LifecycleA
        <div style={{ color: "red", fontSize: '20px' }}>
          {/* {JSON.stringify(this.state, null, 2)} */}

        </div>
        {/* <ErrorBoundary err={<FallBack />}>
          {this.state.count <= 24 ?
            <CycleClass number={this.state.count} color={this.state.color} />
            : ''
          }
        </ErrorBoundary> */}
      </div>
    );
  }
}

export default LifecycleA;
