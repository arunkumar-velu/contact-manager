import React from 'react'

class AddContact extends React.Component {
    state = { name: '', email: '', desc: '' };

    triggerSubmit = (e) => {
        e.preventDefault();
        this.props.addContactHandler(this.state);
        this.setState({ name: '', email: '', desc: '' });
        this.props.history.push("/");
    }
    render() {
        return (
            <form className="ui form" onSubmit={this.triggerSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text"
                        value={this.state.name}
                        placeholder="Name"
                        name="name"
                        onChange={(e) => this.setState({ name: e.target.value })} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email"
                        value={this.state.email}
                        placeholder="Email"
                        name="email"
                        onChange={(e) => this.setState({ email: e.target.value })} />
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text"
                        value={this.state.desc}
                        placeholder="Description"
                        name="desc"
                        onChange={(e) => this.setState({ desc: e.target.value })} />
                </div>
                <button className="ui button blue">Add Contact</button>
            </form>


        )
    }
};

export default AddContact;