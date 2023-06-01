import Avatar from "../avatar";

export default function AddComment() {
    return (
        <div className="">
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
    )
}