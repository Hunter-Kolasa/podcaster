import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                <h3>Welcome To The Podcaster Home Page</h3>
                <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link>

            </div>
        )
    }
}

export default Home
