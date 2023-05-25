import { useQuery } from "react-query";
import { fetchPosts } from "../../helpers/fetchPosts";
import Post from "./post";

export default function PostsList() {
    const { data, isLoading, error } = useQuery('posts', fetchPosts);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <>
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </>
    );
  }

function SkeletonPost() {
    return (
        <div className="w-full flex justify-center mt-10">
            <div className="max-w-2xl bg-white rounded-lg">
                {/* Header */}
                <span>isLoading</span>
            </div>
        </div>
    )
}

function IsError({ error }) {
    return (
        <div className="w-full flex justify-center mt-10">
            <div className="max-w-2xl bg-white rounded-lg">
                {/* Header */}
                <span>{error}</span>
            </div>
        </div>
    )
}