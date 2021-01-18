import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import SignIn from './components/SignIn/SignIn'
import Dashboard from './components/Dashboard/Dashboard'
import CompletePersonalData from './components/CompletePersonalData/CompletePersonalData';
import Profile from './components/ViewProfile/Profile';
import CreateRequest from './components/CreateRequest/CreateRequest';
function App() {
  return (
    <div className="App">
       <Router>
            <Navbar />
            <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/complete-personal-data' component={CompletePersonalData} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/create-request' component={CreateRequest} />



        </Switch>
       </Router>

    </div>
  );
}

export default App;
