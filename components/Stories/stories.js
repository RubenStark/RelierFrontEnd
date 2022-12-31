import { useRef } from "react"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import Story from "./story"

function Stories() {
    const stories = useRef(null)

    function scrollStories() {
        stories.current.scrollTo({
            left: stories.current.scrollLeft + 600,
            behavior: 'smooth'
        })
    }
    function scrollStoriesRight() {
        stories.current.scrollTo({
            left: stories.current.scrollLeft - 600,
            behavior: 'smooth'
        })
    }

    return (
        <div className="w-full flex justify-center">
            <div className="max-w-2xl bg-white flex overflow-hidden" ref={stories}>

                <div className="flex items-center">
                    <button className="absolute z-10 bg-white rounded-full p-1 m-2" onClick={scrollStoriesRight}>
                        <BsFillArrowLeftCircleFill size={20} />
                    </button>
                </div>


                <div className="flex">
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                </div>

                <div className="flex items-center mx-10">
                    <button className="absolute z-10 bg-white rounded-full p-1" onClick={scrollStories}>
                        <BsFillArrowRightCircleFill size={20} />
                    </button>
                </div>

            </div>

        </div>
    )

}

export default Stories