import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import useIsInstructor from "../../Hooks/useIsInstructor";


const RouteInstructor = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isisInstructorLoading] = useIsInstructor();
    const location = useLocation();

    if(loading || isisInstructorLoading){
        return <div className="text-cyan-600 bg-red-400  text-[3em] font-bold text-center">Access Denied</div>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default RouteInstructor;