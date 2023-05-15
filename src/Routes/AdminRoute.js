import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Constexts/AuthpProvider";
import useAdmin from "./UseAdmin";




const AdminRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading]= useAdmin(user?.email)
    const location = useLocation();
const Loading= "Loading....."
    if(loading
         || 
         isAdminLoading
         ){
        return Loading
    }

    if (user
         && isAdmin
         ){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;