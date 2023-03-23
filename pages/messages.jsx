import { Input } from "@nextui-org/react";
import { useState } from "react"

function Messages() {
    return (
        <>
            <div className="w-screen h-screen flex justify-center">
                <div className="max-w-5xl w-full h-full">
                    <div className="bg-white border border-gray-200 rounded flex h-full">
                        {/* Left */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full max-w-sm">

                            {/* SearchBar */}

                            <div className="row justify-center my-5">
                                <Input clearable bordered placeholder="Name" size="lg" />
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
            </div>

        </>
    );
}

export default Messages;

function Message() {
    return (
        <>
            {/* Receiver */}
            <div className="flex flex-row mb-5 mx-5">
                <div className="bg-blue-500 text-white rounded-lg w-fit flex items-center">
                    <span className="m-5 font-normal">
                        Nothing bro
                        <br></br>
                        Let's go out
                    </span>
                </div>
            </div>

            {/* Sender */}
            <div className="flex flex-row justify-end mb-5 mx-5">
                <div className="bg-blue-500 text-white rounded-lg w-fit flex items-center">
                    <span className="m-5 font-normal">
                        Heeey
                        <br></br>
                        What are you doing
                        <br></br>
                        Im free
                    </span>
                </div>
            </div>
        </>
    )
}


function Chat() {

    const handleClick = () => {
        console.log('Chat clicked');
    }

    return (
        <li onClick={handleClick}>
            <button className="flex items-center w-full px-4 py-2 select-none hover:bg-gray-100 focus:outline-none">
                <img className="w-12 mr-3 rounded-full border" src="https://i.ibb.co/0ZDqmDs/142030673-447983159572512-6561194794076636819-n.jpg" alt="Junior Coders" />
                <div className="transform translate-y-0.5 text-left">
                    <h3 className="leading-4">junior.coders</h3>
                    <span className="text-xs text-gray-500">Active 20s ago</span>
                </div>
            </button>
        </li>
    )
}

function FullMessages() {

    var [messages, setMessages] = useState(null)

    if (messages) {
        return (
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
        )
    }

    return (

        <div className="hidden sm:w-1/2 md:w-2/3 lg:w-3/4 border-l border-gray-200 sm:flex items-center justify-center text-center">
            <div className="space-y-5">
                <div className="border border-black rounded-full inline-flex p-5 items-center justify-center">
                    <svg className="transform translate-y-1" height={52} viewBox="0 0 48 48" width={52}>
                        <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l13.2 13c.5.4 1.1.6 1.7.3l16.6-8c.7-.3 1.6-.1 2 .5.4.7.2 1.6-.5 2l-15.6 9.9c-.5.3-.8 1-.7 1.6l4.6 19c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.5-.5.5-1.1.2-1.6z" />
                    </svg>
                </div>
                <div className="space-y-0.5">
                    <h1 className="font-semibold text-xl">Your Messages</h1>
                    <p className="text-gray-600 min-w-46">Send private photos and messages to a friend or group</p>
                </div>
                <button className="bg-blue-500 py-1 px-3 rounded text-white select-none focus:outline-none">Send Message</button>
            </div>
        </div>

    )
}

function SearchBar() {

    return (
        <form className="w-full">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for a Chat"
                    required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
    )

}