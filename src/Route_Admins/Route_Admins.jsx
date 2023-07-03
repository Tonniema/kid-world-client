import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import useAdmin from "../../Hooks/useAdmin";

const Route_Admins = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className="text-cyan-600 bg-red-400  text-[3em] font-bold text-center">Access Denied</div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default Route_Admins;