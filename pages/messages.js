import Chat from "../components/messages/chat";
import FullMessages from "../components/messages/fullMessages";
import Message from "../components/messages/message";
import SearchBar from "../components/messages/searchBar";
import Navbar from "../components/navbar";

function Messages() {
    return (
        <>
            <Navbar />

            {/* <div className="h-16 md:h-12"></div> */}

            <div className="bg-gray-50 w-screen h-screen sm:p-5">
                <div className="bg-white border border-gray-200 rounded flex h-full ">
                    {/* Left */}
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full">
                        {/* Account */}
                        {/* <div className="border-b border-gray-200 p-3 relative">
                            <button className="flex items-center mx-auto select-none font-semibold focus:outline-none">
                                neysidev
                                <svg className="ml-1 transform rotate-180 translate-y-0.5" height={20} viewBox="0 0 48 48" width={20}>
                                    <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" />
                                </svg>
                            </button>
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none">
                                <svg height={20} viewBox="0 0 44 44" width={20}>
                                    <path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z" /><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z" /><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z" />
                                </svg>
                            </button>
                        </div> */}
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

                    {/* <FullMessages /> */}

                    <div className="w-full bg-gray-100 overflow-scroll">
                        {/* Messages */}
                        <div className="w-full flex flex-col-reverse">
                            <div className="m-5"></div>
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />

                            <div className="w-full bottom-0 fixed">
                                <textarea className="w-full" placeholder="Type a message" />
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </>
    );
}

export default Messages;