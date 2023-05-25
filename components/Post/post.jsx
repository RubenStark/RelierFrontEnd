import { API_HOST } from "../../utils/constants";
import Avatar from "../avatar";
import Buttons from "./buttons";
import Comments from "./comments";

function Post({ post }) {

    // Create a function that takes the created_at value and returns the time since then
    function timeSince(post) {
        const now = new Date();
        const createdAt = new Date(post);
        const diff = now.getTime() - createdAt.getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
      
        if (days > 0) {
          return `${days} day${days === 1 ? "" : "s"} ago`;
        } else if (hours > 0) {
          return `${hours} hour${hours === 1 ? "" : "s"} ago`;
        } else if (minutes > 0) {
          return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
        } else {
          return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
        }
      }

      const avatar_url = API_HOST + "/media/profile_pics/" + post.User.Avatar

    return (
        <div className="w-full flex justify-center mt-10">
            <div className="max-w-2xl bg-white rounded-lg">
                {/* Header */}
                <div className="flex items-center justify-between p-5">
                    <div className="flex items-center">
                        <Avatar url={avatar_url} />
                        <div className="flex flex-col ml-4">
                            <span className="font-semibold">{post.User.name}</span>
                            <span className="text-xs text-gray-500">{timeSince(post.CreatedAt)}</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="ml-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <img
                    src="https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg"
                    alt="post"
                    className="w-full"
                />
                {/* Caption */}
                <div className="p-5">
                    <span className="font-semibold">{post.caption}</span>
                </div>
                <Buttons />
                <Comments />
                {/* Add a comment */}
                <div className="flex items-center justify-between px-5">
                    <div className="flex items-center">
                        <Avatar url='https://www.w3schools.com/howto/img_avatar.png' />
                    </div>
                    <input type="text"
                    placeholder="Add a comment..." 
                    className="w-full p-2 ml-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                    <button className="ml-4">
                        <span className="text-blue-500 font-semibold">Post</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post