import BottomBar from '../components/bottomBar'
import CreatePostIndex from '../components/CreatePost/createPostIndex'
import Post from '../components/Post/post'
import PostsList from '../components/Post/postsList'
import Stories from '../components/Stories/stories'
export default function Home() {

  return (
    <>
      
      <Stories />
      <CreatePostIndex />
      <PostsList />

      {/* <BottomBar /> */}

    </>
  )
}
