import Navbar from './components/Navbar';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import UserList from './components/UserList';
import User from './components/User';
import NewUser from './components/NewUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className="others">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/users">
                <UserList />
              </Route>
              <Route exact path="/users/new">
                <NewUser />
              </Route>
              <Route exact path="/users/:id">
                <User />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
