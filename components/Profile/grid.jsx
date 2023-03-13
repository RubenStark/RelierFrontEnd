import { useState, useEffect } from "react";

function Grid() {
    return (
        <div className="grid grid-cols-3 gap-1 md:gap-4">
            <Image url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" />
            <Image url="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" />
            <Image url="https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg" />
            <Image url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" />
            <Image url="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__340.jpg" />
            <Image url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" />
            <Image url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" />
        </div>
    );
}

export default Grid;

function Image({ url }) {
    
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const setDimensions = () => {
            const gridWidth = document.querySelector(".grid").clientWidth;
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
            <img src={url} className="h-full w-full object-cover" alt="" />
        </div>
    );
}
