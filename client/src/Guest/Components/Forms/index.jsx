import React from 'react'
import './custom.css'
import Login from './Login'
import Signup from './Signup'

export default function CustomForm() {
    return (
        <div className="wrapper">
            <div className="card-switch">
                <label className="switch">
                    <input type="checkbox" className="toggle" />
                    <span className="slider" />
                    <span className="card-side" />
                    <div className="flip-card__inner">
                        <Login />
                        <Signup />
                    </div>
                </label>
            </div>
        </div>

    )
}