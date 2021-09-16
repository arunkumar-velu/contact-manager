import React, { useState, useEffect } from 'react';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import EditContact from './EditContact';
import ContactView from './ContactView';
import api from '../api/Contacts';
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      const response = await api.get('/contacts');
      setContacts(response.data);
    }
    getContacts();

  }, []);

  const addContactHandler = async (contact) => {
    console.log(contact)
    const { name, email, desc } = contact;
    const id = uuidv4();
    const requestData = {
      id,
      name,
      email,
      desc,
      profile: `https://i.pravatar.cc/150??img=${id}`
    }
    const response = await api.post('/contacts', requestData);
    setContacts([...contacts, response.data])
  }

  const editContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      }));
  }

  const deleteHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const updatedList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(updatedList)
  }
  return (
    <div className="ui container">
      <Router>
        <Header />
        <div className="main">
          <Switch>
            <Route path='/' exact render={props => (<ContactList {...props} contacts={contacts} clickHander={deleteHandler} />)} />
            <Route path='/add' render={props => (<AddContact {...props} addContactHandler={addContactHandler} />)} />
            <Route path='/edit' render={props => (<EditContact {...props} editContactHandler={editContactHandler} />)} />
            <Route path='/contact/:id' render={props => (<ContactView {...props} />)} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
