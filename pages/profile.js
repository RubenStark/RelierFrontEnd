import Grid from "../components/Profile/grid"
import Post from "../components/Post/post"
import { useState } from "react"
import Navbar from "../components/navbar"
function Profile() {

    const [showGrid, setShowGrid] = useState(true)

    return (
        <>
            <Navbar />
            <div className="flex justify-center">
                <div className="md:w-2/3">
                    <img
                        src="https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg"
                        alt="post"
                        className="inset-0 w-full h-80 object-cover"
                    />


                    <img
                        className="w-52 h-52 rounded-full mx-auto border-4 border-white relative -top-28"
                        src='https://www.w3schools.com/howto/img_avatar.png'
                        alt="avatar"
                    />



                    <div className="w-full h-10 flex -mt-10">
                        <button
                            onClick={() => setShowGrid(true)}
                            className="w-1/2 flex justify-center items-center border border-b-gray-600 mx-5">
                            <span>Images</span>
                        </button>
                        <button
                            onClick={() => setShowGrid(false)}
                            className="w-1/2 flex justify-center items-center border border-b-gray-600 mx-5">
                            <span>Posts</span>
                        </button>
                    </div>

                    {
                        showGrid ? <Grid /> : <Post />
                    }

                </div>
            </div>
        </>
    )

}

export default Profile