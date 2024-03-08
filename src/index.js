import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

const challengeData = [
  {
    name: "30 Days Of Python",
    description:
      "30 Days of Python challenge is a step by step guide to learn Python in 30 days.",
    status: "completed",
    days: 30,
    level: "Beginners to Advanced",
    duration: "20 Nov 2019 - 20 Dec 2019",
    slug: "pyhton",
    url: "https://github.com/https://https://github.com/Asabeneh/30-Days-Of-Python.com/Asabeneh/30-Days-Of-JavaScript/30-Days-Of-React",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 Days Of JavaScript",
    description:
      "30 Days of JavaScript challenge is a step by step guide to learn JavaScript in 30 days.",
    status: "completed",
    days: 30,
    level: "Beginners to Advanced",
    duration: "1 Jan 2020 - 30 Jan 2020",
    slug: "javascript",
    url: "https://github.com/Asabeneh/30-Days-Of-JavaScript",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 Days Of React",
    description:
      "30 Days of React challenge is a step by step guide to learn React in 30 days.",
    status: "ongoing",
    days: 30,
    level: "Beginners to Advanced",
    duration: "1 Oct 2020- 30 Oct 2020",
    slug: "react",
    url: "https://github.com/Asabeneh/30-Days-Of-React",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 HTML and CSS",
    description:
      "30 Days of HTML and CSS challenge is a step by step guide to learn HTML and CSS in 30 days.",

    status: "coming",
    days: 30,
    level: "Beginners to Advanced",
    duration: "",
    slug: "html-and-css",
    url: "",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 ReactNative",
    description:
      "30 Days of ReactNative challenge is a step by step guide to learn ReactNative in 30 days.",
    status: "coming",
    days: 30,
    level: "Beginners to Advanced",
    duration: "",
    slug: "reactnative",
    url: "",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 Data Analysis",
    description:
      "30 Days of Data Analysis challenge  is a step by step guide to learn about data, data visualization and data analysis in 30 days.",
    status: "coming",
    days: 30,
    level: "Beginners to Advanced",
    duration: "",
    slug: "data-analysis",
    url: "",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 Machine Learning",
    description:
      "30 Days of Machine learning challenge  is a step by step guide to learn data cleaning, machine learning models and predictions in 30 days.",
    status: "coming",
    days: 30,
    level: "Beginners to Advanced",
    duration: "",
    slug: "machine-learning",
    url: "",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
];


const Home = (props) => <h1>Welcome to Home</h1>;
const About = (props) => <h1>About</h1>;
const Contact = (props) => <h1>Contact</h1>;
const NotFound = (props) => <h1>Page Not Found </h1>;

const SingleChallenge = ({
  challenge: {
    name,
    description,
    status,
    days,
    level,
    duration,
    author: { firstName, lastName },
  },
}) => {
  return (
    <div>
      <p>Project Name: {name}</p>
      <p>Level: {level}</p>
      <p>
        Author: {firstName} {lastName}
      </p>
      <p>Description: {description} </p>
      <p>Duration : {duration && (duration)}</p>
      <p>Day's: {days}</p>
      <p>status: {status}</p>
    </div>
  );
};

const Challenges = (props) => {
  const path = props.location.pathname
  const currentSlug = path.split('/')[path.split('/').length - 1]

  const currentChallenge = challengeData.find(({ slug }) => slug === currentSlug)
  console.log(currentChallenge)


  const challenge = challengeData.map(({ name, slug }) => <li key={slug}><NavLink to={`/challeges/${slug}`}>{name}</NavLink></li>)
  return (
    <div>
      <ul>
        <h1>Select Challege</h1>
        <ul>
        {challenge}
        </ul>
          <Switch>
            <Route
              exact
              path={"/challeges"}
              component={() => <h1>Choose any of the challenges</h1>}
            />

            <Route path={path} component={(props) => <SingleChallenge challenge={currentChallenge} />} />
            
          </Switch>
      </ul>
    </div>

  )
}
const NavBar = () => (
  <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li><NavLink to="/challeges">Challeges</NavLink></li>
  </ul>
)

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/challeges" component={Challenges}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route exact path="/" component={Home}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}



const rootElement = document.getElementById("root");
render(<App />, rootElement);