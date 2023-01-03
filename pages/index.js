import CreatePost from '../components/CreatePost/createPost'
import Navbar from '../components/navbar'
import Post from '../components/Post/post'
import Stories from '../components/Stories/stories'
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="my-20"></div>

      <Stories />
      <CreatePost />
      <Post />
      <Post />
      <Post />

      <div className="w-screen h-screen bg-gray-300 absolute top-0 z-10 hidden">
        
      </div>

    </>
  )
}
