
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import AllServices from './components/AllServices/AllServices';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './components/Context/AuthProvider';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">

      <AuthProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <Route path="/services">
            <AllServices></AllServices>
          </Route>
          <PrivateRoute path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
     
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
