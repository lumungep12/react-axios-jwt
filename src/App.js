import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
              <div className="nav-item active">
                <Link className="navLink" to={"/create-user"}>Create User</Link>
              </div>
              <div className="nav-item">
                <Link className="navLink" to={"/users"}>All Users</Link>
              </div>
          </div>
        </div>
      </header>

        <div className="container">
            <Switch>
              <Route exact path="/" component={CreateUser} />
              <Route path="/create-user" component={CreateUser} />
              <Route path="/users" component={Users} />
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
