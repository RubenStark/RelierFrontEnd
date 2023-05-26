import Avatar from "../components/avatar";
import TagsPart from "../components/CreatePost/tagsPart";
import UploadImage from "../components/CreatePost/uploadImage";

function CreatePost() {

    return <CreatePostMobile />
}

function CreatePostMobile() {
    return (
        <>
            <div className="w-screen h-screen">
                <div className="h-full w-full flex lg:px-20 justify-center">
                    <UploadImage />
                    <div className="h-full w-1/2 bg-white">
                        <div className="flex items-center p-5">
                            <Avatar url='https://www.w3schools.com/howto/img_avatar.png' />
                            <div className="flex flex-col ml-4">
                                <span className="font-semibold">Username</span>
                            </div>
                        </div>
                        <textarea className="w-full h-1/2 p-5 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                            placeholder="What's on your mind?" />
                        <TagsPart />
                    </div>
                </div>
            </div>
        </>
    )
}

function CreatePostPc() {

    return (
        <>
            <div className="w-screen h-screen">
                <div className="h-full w-full flex lg:px-20 justify-center">
                    <UploadImage />
                    <div className="h-full w-1/2 bg-white">
                        <div className="flex items-center p-5">
                            <Avatar url='https://www.w3schools.com/howto/img_avatar.png' />
                            <div className="flex flex-col ml-4">
                                <span className="font-semibold">Username</span>
                            </div>
                        </div>
                        <textarea className="w-full h-1/2 p-5 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                            placeholder="What's on your mind?" />
                        <TagsPart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost