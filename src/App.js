import Navbar from "./components/Navbar";
import './App.css';
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from "./components/Home";
import Users from "./components/Users";
import Products from "./components/Products";

function App() {
  return (
    <Router>
 <div className="App">
     <Navbar/>
     <div className="container">
        <Sidebar/>
       <div className="others">
         <Switch>
           <Route  exact path="/"><Home/></Route>
           <Route  exact path="/users"><Users/></Route>
           <Route  exact path="/products"><Products/></Route>
         </Switch>
       </div>
     </div>
    </div>
    </Router>
  );
}

export default App;
