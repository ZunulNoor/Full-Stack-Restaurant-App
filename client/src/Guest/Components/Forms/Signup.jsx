import axios from 'axios'
import React, { useState } from 'react'

export default function Signup() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")

    const SignupUser = (e) => {
        e.preventDefault();
        const payload = { username, password, email, address, contact }

        axios.post('/api/signup', payload)
            .then((json) => console.log(json.data))
            .catch(err => console.log(err))

    }

    return (
        <div className="flip-card__back">
            <div className="title">Sign up</div>
            <form className="flip-card__form" onSubmit={SignupUser}>
                <input
                    className="flip-card__input"
                    placeholder="Name"
                    type="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="flip-card__input"
                    name="Contact"
                    placeholder="Contact"
                    type="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                />
                <input
                    className="flip-card__input"
                    name="address"
                    placeholder="Address"
                    type="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className="card-switch">
                    <button className="flip-card__btn" type='submit'>Confirm!</button>
                </div>
            </form>
        </div>
    )
}