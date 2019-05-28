import React, { Component } from "react";
import "./Name.scss";

type NameProps = {
  data: {
    type: string,
    displayLabel: string,
    placeholder: string,
    errorMessage: string,
    required: boolean,
  };
  update: ((data: object) => void);
}

type NameState = {
  value: string;
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

  handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const name = event.target.value;
    if (!name.match(/\w \w/)) {
      this.setState({ showError: true });
    } else {
      this.setState({ showError: false });
      this.setState({ value: event.target.value }, () => {
        this.props.update({
          name: this.state.value
        })
      });
    }
  }

  render() {
    return (
      <div className="name">
        <label className="name__label">{this.props.data.displayLabel}</label>
        <input className="name__input" type="text" placeholder={this.props.data.placeholder} defaultValue="" onBlur={event => this.handleBlur(event)}></input>
        <p className={"name__error-message" + (this.state.showError ? "" : " name__error-message--hidden")}> {this.props.data.errorMessage}</p>
      </div>
    )
  }
}

export default Name;