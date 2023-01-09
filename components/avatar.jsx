function Avatar ({url}){
    return (
        <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
            <img src={url}
                alt="avatar"
                className="object-cover w-full h-full"
            />
        </div>
    )
}

export default Avatar