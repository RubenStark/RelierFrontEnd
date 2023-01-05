import Avatar from "../avatar"
import { HiPhotograph } from "react-icons/hi"
import Link from "next/link"

function CreatePostIndex() {
    return (
        <>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-2xl bg-white rounded-lg">
                    <div className="flex items-center justify-between h-16">

                        <div className="ml-5 cursor-pointer">
                            <Link href="/profile">
                                <Avatar url='https://www.w3schools.com/howto/img_avatar.png' />
                            </Link>
                        </div>
                        <Link href="/createPost">
                            <button className="bg-gray-200 rounded-md px-10 font-normal">
                                Por que no posteas algo?
                            </button>
                        </Link>

                        <HiPhotograph className="h-6 w-6 text-blue-500 mr-5 cursor-pointer" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreatePostIndex


