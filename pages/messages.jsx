import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Chat from "../components/messages/chat";
import FullMessages from "../components/messages/fullMessages";
import Message from "../components/messages/message";
import SearchBar from "../components/messages/searchBar";
import Navbar from "../components/navbar";

function Messages() {
    return (
        <>

            {/* <Navbar /> */}
            {/* <div className="h-16 md:h-12"></div> */}
            <div className="bg-gray-50 w-screen h-screen sm:p-5">
                <div className="bg-white border border-gray-200 rounded flex h-full ">
                    {/* Left */}
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full">

                        {/* Account */}
                        <div className="border-b border-gray-200 p-3 relative">
                            <button className="flex items-center">
                                <Link href="/" className='w-10'>
                                    <BiArrowBack size={22} />
                                </Link>
                                Home
                            </button>
                        </div>

                        {/* Group */}
                        <div className="flex items-center justify-between text-sm border-b border-gray-200">
                            {/* Search Bar */}
                            <SearchBar />
                        </div>
                        {/* Chats */}
                        <ul className="py-1 overflow-auto">

                            {/* Chats */}
                            <Chat />
                            <Chat />
                            <Chat />
                            <Chat />

                        </ul>
                    </div>
                    {/* Right Full Messages */}

                    <FullMessages />

                </div>
            </div>

        </>
    );
}

export default Messages;