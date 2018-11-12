import React , {ReactDOM,Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt,
  Switch
} from 'react-router-dom'
const RouterTest = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}></Route>
        <Route path="/topics" component={Topics}/>
      </Switch>
    </div>
  </Router>
)
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = ({match}) => (
  <div>
    {match.url}
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    {/* <Prompt message="确定要离开吗"></Prompt> */}
    <p>{JSON.stringify(match)}</p>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default RouterTest