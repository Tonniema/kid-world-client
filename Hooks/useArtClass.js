import { useQuery } from "@tanstack/react-query";

const useClass = () => {

    const {data: art_classes = [] , isLoading: loading , refetch } = useQuery({
        queryKey: ['art'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-kids-world-server.vercel.app/art_class')
            return res.json()
        }

    })
    return [art_classes , loading , refetch]
}

export default useClass;