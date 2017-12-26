import React, { Component } from 'react';
import ListContacts from './ListContacts';
import Navbar from 'react-bootstrap/lib/Navbar';


const contacts = [
    {
      id: 'ryan',
      name: 'Ryan Florence',
      email: 'ryan@reacttraining.com',
      avatarURL: 'http://localhost:5001/ryan.jpg'
    },
    {
      id: 'michael',
      name: 'Michael Jackson',
      email: 'michael@reacttraining.com',
      avatarURL: 'http://localhost:5001//michael.jpg'
    },
    {
      id: 'tyler',
      name: 'Tyler McGinnis',
      email: 'tyler@reacttraining.com',
      avatarURL: 'http://localhost:5001/tyler.jpg'
    }
  ];

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      contacts: contacts
    }
    this.handleRemoveContact = this.handleRemoveContact.bind(this);
  }

  handleRemoveContact(contact){
    console.log(contact);
     this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Contact List</a>
            </Navbar.Brand>
          </Navbar.Header>
         </Navbar>
       <ListContacts handleRemove={this.handleRemoveContact} contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
