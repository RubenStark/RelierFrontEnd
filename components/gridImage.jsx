import { useState, useEffect } from "react";

export default function GridImage({ url, onClick }) {

    const [height, setHeight] = useState(0);

    useEffect(() => {
        const setDimensions = () => {
            const imageWidth = document.querySelector(".grid img").clientWidth;

            setHeight(imageWidth);
        };

        setDimensions();

        window.addEventListener("resize", setDimensions);

        return () => {
            window.removeEventListener("resize", setDimensions);
        };
    }, []);

    return (
        <div style={{ height }} onClick={onClick}>
                <img src={url} className="object-cover w-full h-full hover:brightness-75" alt="" />
        </div>
    );
}
