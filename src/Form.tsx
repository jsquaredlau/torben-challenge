import React, { Component } from "react";
import "./Form.scss";

type FormProps = {
  data: any;
}

type FormState = {
  response: any;
}

export enum FormItem {
  Name,
  DoB,
  Contact,
  Guardian
}

class Form extends Component<FormProps, FormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      response: {}
    }
    this.update = this.forceUpdate.bind(this);
  }

  update(data: any) {
    console.log(data);
  }

  formParser(formItem: any) {
    return (<div></div>)
  }

  render() {
    return (
      <div className="form">
        {Object.keys(this.props.data.items).map(item => {
          return this.formParser(this.props.data.items[item])
        })}
      </div>
    )
  }
}

export default Form;