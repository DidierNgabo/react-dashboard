import Navbar from './components/Navbar';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import User from './components/User';
import NewUser from './components/NewUser';
import ProductList from './components/ProductList';
import Product from './components/Product';
import NewProduct from './components/newProduct';

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
                <ProductList />
              </Route>
              <Route exact path="/products/new">
                <NewProduct />
              </Route>
              <Route exact path="/products/:id">
                <Product />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
