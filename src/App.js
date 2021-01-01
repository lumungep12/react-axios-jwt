import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateUser from './Components/CreateUser';
import Users from './Components/Users';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <div className="nav">
          <div >
          <a href="#!" className="navbarBrand">React Axing Routes</a>
          </div>
          <div className="navbar">
            <ul className="navbar-nav">
              <li className="navItem active">
                <Link className="navLink" to={"/create-user"}>Create User(Public)</Link>
              </li>
              <li className="navItem">
                <Link className="navLink" to={"/users"}>Users(Private)</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path="/" component={CreateUser} />
              <Route path="/create-user" component={CreateUser} />
              <Route path="/users" component={Users} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
