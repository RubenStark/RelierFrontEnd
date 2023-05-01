import Avatar from "../avatar";
import Buttons from "./buttons";
import Comments from "./comments";

function Post({ post }) {

    // Create a function that takes the created_at value and returns the time since then
    const timeSince = (date) => {
        const seconds = Math.floor((new Date() - date) / 1000);

        let interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    };

    return (
        <div className="w-full flex justify-center mt-10">
            <div className="max-w-2xl bg-white rounded-lg">
                {/* Header */}
                <div className="flex items-center justify-between p-5">
                    <div className="flex items-center">
                        <Avatar url='https://www.w3schools.com/howto/img_avatar.png' />
                        <div className="flex flex-col ml-4">
                            <span className="font-semibold">{post.User.Name}</span>
                            <span className="text-xs text-gray-500">{timeSince(post.CreatedAt)} ago</span>
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