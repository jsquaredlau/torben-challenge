import React, { Component } from 'react';
import './App.scss';
import Form, { FormItem } from "./Form";



const formSchema = {
  title: "A form for Torben",
  description: "A dynamically generated form based upon a json schema",
  items: {
    name: {
      type: FormItem.Name,
      displayLabel: "Name",
      placeholder: "First and last name",
      errorMessage: "Please check your name.",
      required: true,
    },
    contact: {
      type: FormItem.Contact,
      displayLabel: "Contact Numbers",
      fields: [
        {
          type: ContactType.Home,
          required: true,
        },
        {
          type: ContactType.Mobile,
          required: false,
        }
      ]
    },
    dateOfBirth: {
      type: FormItem.DoB,
      required: true,
    },
    guardian: {
      type: FormItem.Guardian,
      required: true
    }
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Form data={formSchema}></Form>
      </div>
    )
  }
}

export default App;
