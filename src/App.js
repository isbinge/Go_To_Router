import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch
} from 'react-router-dom'

import './App.css';

const About = () =>{
  return <h1>This is a About page</h1>
}

const Topics = (props) =>{
  let match = useRouteMatch();
  console.log(props,'match:',match)
  return <div>
    <h1>This is a Topics page</h1>
  </div>
}

function App() {
  return (
    <div className="App">
    <Router>
      <ul>
      <li>
            <Link to="/">Home</Link>
          </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/topics'}>Topics</Link>
        </li>
      </ul>
    <Switch>
      <Route path={'/about'} component={About}/>
      <Route path={'/topics'} component={Topics}></Route>
      <Route path='/'>
        <h1>This is a home page</h1>
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
