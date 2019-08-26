import React, { Component } from "react";
import ListCounter from "./ListCounter";

class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div style={styles}>
        <div>
          Clicked: {value} times <button onClick={onIncrement}>+</button>{" "}
          <button onClick={onDecrement}>-</button>
        </div>
        <ListCounter />
      </div>
    );
  }
}
const styles = {
  color: "blue",
  backgroundColor: "yellow",
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-around"
};

export default Counter;
