import DashHome from "../Pages/dashboard/DashHome/DashHome";
import ManageProducts from "../Pages/dashboard/ManageProducts/ManageProducts";
import Reports from "../Pages/dashboard/Reports/Reports";

const dashMain= [
    {path:"/dashboard" , exact:true , Component : DashHome},
    {path:"/dashboard/reports" , exact:true , Component : Reports},
    {path:"/dashboard/products" , exact:true , Component : ManageProducts},
]
export default dashMain;