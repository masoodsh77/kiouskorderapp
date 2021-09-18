import './App.css';
import Login from './Pages/Login/Login'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import dashRoute from './Routes/dashboard.Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
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
        </switch>
      </Router>
    </div>
  );
}

export default App;
