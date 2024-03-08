import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const Home = () => <h1>Home</h1>

// About component
const About = (props) => <h1>About Us</h1>

// Contact component
const Contact = (props) => <h1>Contact us</h1>

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React Route</h1>
                <Router>
                    <Route path="/" component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </Router>

            </div>
        )
    }
}

export default App