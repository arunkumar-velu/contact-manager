import React from 'react';
import { Link } from 'react-router-dom';
const ContactList = (props) => {
    const contacts = props.contacts.map((contact) => {
        const { name, email, id, profile } = contact;
        return (
            <div className="item" key={id}>
                <img class="ui avatar image" src={profile} />
                <div className="content">
                    <Link
                        to={{ pathname: `/contact/${id}`, state: { contact: contact } }}
                    >
                        <div className="header">{name}</div>
                        <div class="description">{email}</div>
                    </Link>
                </div>
                <div class="right floated content">
                    <i
                        className="trash alternate outline icon"
                        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
                        onClick={() => props.clickHander(id)}
                    ></i>
                </div>
                <div class="right floated content">
                    <Link to={{ pathname: `/edit`, state: { contact: contact } }}>
                        <i
                            className="edit alternate outline icon"
                            style={{ color: "blue", marginTop: "7px" }}
                        ></i>
                    </Link>
                </div>
            </div >
        )
    })
    return (
        <div>
            <div className="ui clearing segment">
                <h2 className="ui left floated header">
                    Contact List
            </h2>
                <div className="ui right floated header">
                    <Link to="/add">
                        <button className="ui button blue floated right">Add Contact</button>
                    </Link>
                </div>
            </div>
            <div className="ui middle aligned divided list">{contacts}</div>
        </div>
    );
};
export default ContactList;