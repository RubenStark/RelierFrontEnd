import { Avatar, Link, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import AvatarListTile from "../components/avatarListTile";

export default function Story() {
    const router = useRouter();
    const [currentStory, setCurrentStory] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const stories = [
        {
            id: 1,
            image:
                "https://th.bing.com/th/id/R.ff8408e217026910a8a498acb06515a8?rik=8dhupl1nDHU8Rg&pid=ImgRaw&r=0",
            user: {
                name: "John Doe",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
        {
            id: 2,
            image:
                "https://i.pinimg.com/originals/ff/c2/40/ffc2407708279a9494a24e47fbe2afaf.jpg",
            user: {
                name: "John Doe",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
        {
            id: 3,
            image: "https://picsum.photos/id/29/200/300",
            user: {
                name: "John Doe",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
    ];

    const NextStory = () => {
        const index = stories.findIndex((story) => story.id === currentStory.id);
        if (index === stories.length - 1) {
            router.push("/");
        } else {
            setCurrentStory(stories[index + 1]);
        }
    };

    const PrevStory = () => {
        const index = stories.findIndex((story) => story.id === currentStory.id);
        if (index === 0) {
            return;
        } else {
            setCurrentStory(stories[index - 1]);
        }
    };

    useEffect(() => {
        setCurrentStory(stories[0]);
    }, []);

    if (!isMobile) {
        return (
            <div className="bg-zinc-900 w-screen h-screen">
                <div className="row justify-center w-full h-full">
                    <div className="flex items-center mx-10">
                        <button
                            className="bg-white rounded-full p-1">
                            <BsFillArrowLeftCircleFill size={20} onClick={PrevStory} />
                        </button>
                    </div>
                    {currentStory && (
                        <div className="relative" style={{ height: "80%" }}>
                            <img
                                className="object-cover"
                                src={currentStory.image}
                                style={{ height: "100%" }}
                            />
                            <div className="absolute top-0 left-0 w-full m-2">
                                <AvatarListTile
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    name={"Ruben Skays"}
                                    username={"ruben_skays_777"}
                                    white={true}
                                />
                            </div>
                        </div>
                    )}
                    <div
                        className="absolute top-0 right-0 m-5 text-white text-4xl cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        x
                    </div>
                    <div className="flex items-center mx-10">
                        <button className="bg-white rounded-full p-1">
                            <BsFillArrowRightCircleFill size={20} onClick={NextStory} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-zinc-900 w-screen h-screen">
            <div className="realtive w-full h-full flex items-center">
                {currentStory && (
                    <img
                        className="object-cover"
                        src={currentStory.image}
                        style={{ width: "100%" }}
                    />
                )}
                <div className="absolute top-0 left-0 w-full p-2">
                    <AvatarListTile
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        name={"Ruben Skays"}
                        username={"ruben_skays_777"}
                        white={true}
                    />
                </div>
                <div
                    className="absolute top-0 right-0 px-2 text-white text-4xl cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    x
                </div>

                <div className="absolute h-screen w-1/2" onClick={PrevStory}></div>
                <div className="absolute h-screen w-1/2 right-0" onClick={NextStory}></div>

            </div>
        </div>

    )
}


