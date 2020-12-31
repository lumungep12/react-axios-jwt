import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateUser from './Components/CreateUser';
import Users from './Components/Users';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a href="#!" className="navbar-brand">React Axing Routes</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/create-user"}>Create User(Public)</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/users"}>Users(Private)</Link>
              </li>
            </ul>
          </div>
        </nav>
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
