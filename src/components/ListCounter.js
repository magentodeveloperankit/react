import React, { Component } from "react";

class ListCounter extends Component {
  render() {
    const { value } = this.props;
    var rows = [];
    for (let i = 0; i <= value; i++) {
      rows.push("Index : " + i);
    }
    return (
      <div>
        <ul>
          {rows.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ListCounter;
