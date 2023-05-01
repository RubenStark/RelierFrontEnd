import { useQuery } from "react-query";
import { fetchPosts } from "../../helpers/fetchPosts";
import Post from "./post";

export default function PostsList() {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: 'posts',
        queryFn: fetchPosts,
    })

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>Error: {error.message}</div>

    console.log(data)

    return (
        <>
            {data.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}