import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Dashboard from '../Layouts/Dashboard'
import Resturants from "../Pages/Home/Resturants/Resturants";

const dashRoute = [
    {path:"/" , exact:true , Component : Home},
    { path: "/Login", exact: true, Component: Login },
    { path: "/dashboard", exact: false, Component: Dashboard  },
    { path: "/resturants", exact: false, Component: Resturants  },
  ];
  export default dashRoute;