import React, { Component } from 'react';
import isURL from 'validator/lib/isURL';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const valid = isURL(this.state.value);
    alert(`${this.state.value} is valid: ${valid}`);
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input type="text" className="input-text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" className="button" value="Submit" />
      </form>
    );
  }
}

export default Form;
