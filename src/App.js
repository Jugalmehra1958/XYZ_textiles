import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

// import Home from './Components/Home';
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Service from "./Pages/Service";
import AppNavbar from "./Components/AppNavbar";
import Footer from "./Components/Footer"
import ServicePage from "./Pages/ServicePage"
import OurOffices from "./Pages/OurOffices";
import Aboutus from "./Pages/Aboutus";


function App() {
  return (
    <Router>
    <AppNavbar></AppNavbar>
      <div>
        <hr />
        <Switch>
          <Route exact path="/">
             <Home />
          </Route>
          <Route  path="/service">
            <ServicePage/>
          </Route>
          <Route  path="/aboutus">
            <Aboutus/>
          </Route>
          <Route  path="/ouroffices">
            <OurOffices/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
