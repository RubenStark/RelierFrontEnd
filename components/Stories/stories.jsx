import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Story from "./story";

function Stories() {
  const stories = useRef(null);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-2xl bg-white flex overflow-auto" ref={stories}>
        {/* <div className="flex items-center">
                    <button className="absolute z-10 bg-white rounded-full p-1 m-2" onClick={scrollStoriesRight}>
                        <BsFillArrowLeftCircleFill size={20} />
                    </button>
                </div> */}

        <div className="flex gap-2">
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

        {/* <div className="flex items-center mx-10">
                    <button className="absolute z-10 bg-white rounded-full p-1" onClick={scrollStories}>
                        <BsFillArrowRightCircleFill size={20} />
                    </button>
                </div> */}
      </div>
    </div>
  );
}

export default Stories;
