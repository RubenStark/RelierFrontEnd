import { useQuery } from "react-query";
import { fetchPosts } from "../../helpers/fetchPosts";
import SkeletonPost from "./skeletonPost";
import Post from "./post";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function PostsList() {
  const { data, isLoading, error } = useQuery("posts", fetchPosts, {
    retry: 3, // Intentar 3 veces en caso de error
  });

  useEffect(() => {
    if (error) {
      toast.error("Error al cargar los posts");
    }
  }, [error]);

  if (isLoading) {
    return <SkeletonPost />;
  }

  if (error) {
    return null; // Evitar renderizar el componente nuevamente si hay un error
  }

  return (
    <>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
