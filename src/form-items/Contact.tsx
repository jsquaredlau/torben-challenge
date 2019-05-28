import React, { Component } from "react";
import "./Contact.scss";

export enum ContactType {
  Home,
  Mobile,
  Work
}

type ContactProps = {
  data: {
    type: string,
    displayLabel: string,
    fields: [
      {
        type: ContactType,
        required: boolean,
      }
    ]
  };
  update: ((data: object) => void);
}

type ContactState = {
  [key: string]: string | undefined
  mobile?: string;
  home?: string;
  work?: string;
}

const MobileNumber = ({ required, callback }: { required: boolean, callback: any }) => {
  return (
    <div className="mobile-number">
      <label className="mobile-number__label">Mobile</label>
      <input className="mobile-number__input" type="text" placeholder="Mobile number" defaultValue="" required={required} onBlur={event => callback(event, "mobile")}></input>
    </div>
  )
}

const HomeNumber = ({ required, callback }: { required: boolean, callback: any }) => {
  return (
    <div className="home-number">
      <label className="home-number__label">Home</label>
      <input className="home-number__input" type="text" placeholder="Home number" defaultValue="" required={required} onBlur={event => callback(event, "home")}></input>
    </div>
  )
}

class Contact extends Component<ContactProps, ContactState> {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(event: React.FocusEvent<HTMLInputElement>, type: string) {
    this.setState({ [type]: event.target.value }, () => {
      let contactValues = [];
      contactValues = Object.keys(this.state).map(contact => {
        return { type: contact, value: this.state[contact] }
      });
      this.props.update({ contract: contactValues });
    })
  }

  render() {
    return (
      <div className="contact">
        <h4 className="contact__title">{this.props.data.displayLabel}</h4>
        {this.props.data.fields.map((field: any) => {
          if (field.type === ContactType.Home) {
            return (<HomeNumber required={field.required} callback={this.handleBlur} key={field.type}></HomeNumber>)
          } else if (field.type === ContactType.Mobile) {
            return (<MobileNumber required={field.required} callback={this.handleBlur} key={field.type}></MobileNumber>)
          } else {
            return (<div></div>);
          }
        })}
      </div>
    )
  }
}
export default Contact;