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

export default Message