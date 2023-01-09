function Image({ url }) {

    return (
        <div className="h-32 sm:h-52 md:h-44 lg:h-72 xl:h-96">
            <img src={url} className='h-full w-full object-cover'/>
        </div>
    )
}

export default Image