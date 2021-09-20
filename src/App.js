import './App.css';
import Login from './Pages/Login/Login'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import dashRoute from './Routes/dashboard.Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        {dashRoute.map(({ path, exact, Component }, index) => {
            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                render={(props) => <Component {...props} />}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
