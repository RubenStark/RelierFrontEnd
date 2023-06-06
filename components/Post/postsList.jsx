import { useQuery } from "react-query";
import { fetchPosts } from "../../helpers/fetchPosts";
import SkeletonPost from "./skeletonPost";
import Post from "./post";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function PostsList() {
  const { data, isLoading, error } = useQuery("posts", fetchPosts);

  useEffect(() => {
    console.log(error);
  }, [error]);

  if (isLoading) {
    return <SkeletonPost />;
  }

  if (error) {
    toast.error("Error al cargar los posts");
    return null;
  }

  return (
    <>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
