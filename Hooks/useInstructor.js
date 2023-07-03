import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useInstructor = () => {

    const {data: instructors = [] , isLoading: loading , refetch } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-kids-world-server.vercel.app/instructor')
            return res.json()
        }

    })
    return [instructors , loading , refetch]
}

export default useInstructor;