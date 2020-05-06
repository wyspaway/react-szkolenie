import React, { Component } from "react";

class Form extends Component {
  state = {
    inputTextValue: "",
    inputContentValue: "",
    inputTextValueAfterSubmit: "",
    inputContentValueAfterSubmit: "",
  };

  handleChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submited: " + this.state.inputTextValue);
    this.setState({ inputTextValueAfterSubmit: this.state.field1.value });
    // this.setState({
    //   inputContentValueAfterSubmit: this.state.inputContentValue,
    // });
  };

  update = (name, e) => {
    this.setState({ [name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <p>
          <input
            type="text"
            value={this.state.field1}
            onChange={(e) => this.update("field1", e)}
          />
          {this.state.field1}
        </p>
        <p>
          <input
            type="text"
            value={this.state.field2}
            onChange={(e) => this.update("field2", e)}
          />
          {this.state.field2}
        </p> */}
        <label>
          Imie i nazwisko:
          <input
            type="text"
            name="field1"
            value={this.state.inputTextValue}
            onChange={(e) => this.handleChange(e, "field1")}
          />
        </label>
        <label>
          Treść:
          <input
            type="text"
            name="field2"
            value={this.state.inputContentValue}
            onChange={(e) => this.handleChange(e, "field2")}
          />
        </label>
        <button type="submit">dodaj</button>
        <p>{this.state.inputTextValueAfterSubmit}</p>
        <p>{this.state.inputContentValueAfterSubmit}</p>
      </form>
    );
  }
}

export default Form;
