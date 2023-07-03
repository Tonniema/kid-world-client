import { useQuery } from "@tanstack/react-query";
// import { AuthContext } from "../src/Providers/AuthProviders";
import { useContext } from "react";

import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../src/Provider/AuthProviders";
// import useAxiosSecure from "./useAxiosSecure";

const useIsInstructor = () => {
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isisInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/userInfo/instructor/${user?.email}`);
            console.log('is Instructor response', res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isisInstructorLoading]
}
export default useIsInstructor;