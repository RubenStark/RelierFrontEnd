import { useState, useEffect } from "react";

export default function GridImage({ url }) {

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
        <div style={{ height }}>
            <img src={url} className="object-cover w-full h-full" alt="" />
        </div>
    );
}
