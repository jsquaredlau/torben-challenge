import React, { Component } from "react";
import Name from "./form-items/Name";
import Contact from "./form-items/Contact"
import "./Form.scss";

type FormProps = {
  data: {
    title: string;
    description: string;
    items: any;
  };
}

type FormState = {
  response: object;
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
    this.update = this.update.bind(this);
  }

  update(data: object) {
    this.setState({ response: { ...this.state.response, ...data } })
  }

  formParser(formItem: any) {
    if (formItem.type === FormItem.Name) {
      return (
        <Name data={formItem} update={this.update} key={formItem.type}></Name>
      )
    } else if (formItem.type === FormItem.Contact) {
      return (
        <Contact data={formItem} update={this.update} key={formItem.type}></Contact>
      )
    } else {
      return (<div key={formItem.type}></div>)
    }
  }

  submit() {
    console.log(this.state.response);
  }

  render() {
    return (
      <div className="form">
        {Object.keys(this.props.data.items).map(item => {
          return this.formParser(this.props.data.items[item])
        })}
        <button className="form__submit" onClick={() => this.submit()}>Submit</button>
      </div>
    )
  }
}

export default Form;