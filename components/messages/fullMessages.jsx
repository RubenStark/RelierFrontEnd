import { useState } from "react"
import Message from "./message"

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

export default FullMessages