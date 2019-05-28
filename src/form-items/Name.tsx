import React, { Component } from "react";
import "./Name.scss";

type NameProps = {
  data: any;
  update: any;
}

type NameState = {
  value: any;
  showError: boolean;
}

class Name extends Component<NameProps, NameState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: "",
      showError: false,
    }
  }

  render() {
    return (
      <div className="name">
        <label className="name__label">{this.props.data.displayLabel}</label>
        <input className="name__input" type="text" placeholder={this.props.data.placeholder}></input>
        <p className={"name__error-message" + (this.state.showError ? "" : " name__error-message--hidden")}>{this.props.data.errorMessage}</p>
      </div>
    )
  }
}

export default Name;