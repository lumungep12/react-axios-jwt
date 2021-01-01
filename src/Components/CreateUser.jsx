import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: ''
        }
    }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            name: this.state.name,
            email: this.state.email
        };

        axios.post('http://localhost:4000/users/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', email: '' })
    }


    render() {
        return (
            <div className="formWrapper">
                <p>Enter Your Details Below</p>
                <form onSubmit={this.onSubmit} className="formless">
                    <div className="form-group">
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <button type="submit"className="button"> Create User <i class="far fa-plus-square"></i></button>
                    </div>
                </form>
                <div className="copy">
                <small>All rights Reserved LumugeDEVS &copy; 2020</small>
                </div>
            </div>
        )
    }
}