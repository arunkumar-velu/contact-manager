import React from 'react';
import user from '../images/matthew.png'
class ContactView extends React.Component {
    render() {
        const { name, email, desc, profile } = this.props.location.state.contact;
        return (
            <div class="ui cards center aligned">
                <div class="card">
                    <div class="image">
                        <img src={profile} />
                    </div>
                    <div class="content">
                        <div class="header">{name}</div>
                        <div class="meta">
                            <a>{email}</a>
                        </div>
                        <div class="description">
                            {desc}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactView;