
import './App.css';
import HomePage from './HomePage';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import BankDetails from './BankDetails';
import Favourites from './Favourites';
import LandingPage from './LandingPage';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Switch>
    <Route exact path="/">
    <LandingPage />
      </Route>
      </Switch>
    <Switch>
    <Route exact path="/all-banks">
    <HomePage />
      </Route>
      </Switch>


      <Switch>
    <Route path="/bank-details/:ifsc">
     <BankDetails />
      </Route>
      </Switch>

      <Switch>
    <Route exact path="/favourites">
    <Favourites />
      </Route>
      </Switch>


    
    </div>
    </BrowserRouter>
  );
}

export default App;
