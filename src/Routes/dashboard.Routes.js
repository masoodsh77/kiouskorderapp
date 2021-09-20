import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Dashboard from '../Layouts/Dashboard'

const dashRoute = [
    {path:"/" , exact:true , Component : Home},
    { path: "/Login", exact: true, Component: Login },
    { path: "/dashboard", exact: false, Component: Dashboard  },
  ];
  export default dashRoute;