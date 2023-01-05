import CreatePostIndex from '../components/CreatePost/createPostIndex'
import Navbar from '../components/navbar'
import Post from '../components/Post/post'
import Stories from '../components/Stories/stories'
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="my-20"></div>

      <Stories />
      <CreatePostIndex />
      <Post />
      <Post />
      <Post />

    </>
  )
}
