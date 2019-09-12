import React, { Component } from "react";

export default class AddItem extends Component {
  state = {
    label: ""
  };

  onChangeLagel = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.label !== "") {
      this.props.addItem(this.state.label);
      this.setState({
        label: ""
      });
    } else {
      return;
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="What needs to be done"
            onChange={this.onChangeLagel}
            value={this.state.label}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-info">
              Add task
            </button>
          </div>
        </div>
      </form>
    );
  }
}
