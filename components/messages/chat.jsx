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

export default Chat;