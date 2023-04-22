import { Card, Input, User, } from "@nextui-org/react";
import { useEffect, useState } from "react"


function PcMessages() {
    return (
        <>
            <div className="w-screen height-minus-navbar flex justify-center">
                <div className="max-w-5xl w-full h-full">
                    <div className="border border-gray-200 rounded flex h-full">
                        {/* Left */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full max-w-sm bg-white">
                            {/* SearchBar */}

                            <div className="row justify-center mx-2 my-5">
                                <Input clearable placeholder="Name" size="lg" />
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
    )
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


function Chat({ onClick }) {

    return (
        <li onClick={onClick}>
            <Card
                isHoverable
                isPressable
                variant="bordered"
            >
                <Card.Body>
                    <User
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        name="Ariana Wattson"
                        description="Hey, I'm using NextUI!"
                        bordered
                        color="primary"
                    />
                </Card.Body>
            </Card>
        </li>
    )
}

function FullMessages() {

    const [messages, setMessages] = useState(null)

    if (!messages) {
        return (
            <div className="w-full bg-white overflow-scroll">
                {/* Messages */}
                <div className="w-full flex flex-col-reverse">
                    <div className="m-14 md:m-5"></div>
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <div className="w-full flex justify-center">
                        <div className="w-full bottom-0 fixed max-w-sm md:max-w-lg xl:max-w-3xl mb-12 xl:mb-0">
                            <Input
                                size="lg"
                                placeholder="Enter Your Message"
                                fullWidth="true"
                                status="primary"
                                clearable
                                contentRight={
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
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        />
                                    </svg>
                                }
                            />;
                        </div>
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


function MobileMessages() {

    const [room, setRoom] = useState(null)

    const handleClick = () => {
        setRoom(true)
    }

    return (
        <>
            {
                room && <div className="w-screen h-screen flex justify-center">
                    <div className="max-w-5xl w-full h-full">
                        <div className="border border-gray-200 rounded flex h-full">
                            <FullMessages />
                        </div>
                    </div>
                </div>
            }



            {
                !room && <div className="w-screen bg-white h-screen">
                    {/* SearchBar */}
                    <Input clearable placeholder="Name" size="lg" fullWidth />
                    {/* Chats */}
                    <ul className="py-1 overflow-auto">
                        {/* Chats */}
                        <Chat onClick={handleClick} />
                        <Chat onClick={handleClick} />
                        <Chat onClick={handleClick} />
                        <Chat onClick={handleClick} />
                        <Chat onClick={handleClick} />
                        <Chat onClick={handleClick} />
                    </ul>
                </div>
            }

        </>
    )
}



function Messages() {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsMobile(true)
        }
    }, [])

    return (

        <PcMessages />

    );
}