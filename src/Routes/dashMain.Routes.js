import ManageProducts from "../Pages/ManageProducts/ManageProducts";
import Reports from "../Pages/Reports/Reports";

const dashMain= [
    {path:"/dashboard/reports" , exact:true , Component : Reports},
    {path:"/dashboard/products" , exact:true , Component : ManageProducts},
]
export default dashMain;