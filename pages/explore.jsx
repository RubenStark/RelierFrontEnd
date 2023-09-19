import { Button, Modal } from "@nextui-org/react";
import { useEffect, useState } from "react";
import GridImage from "../components/gridImage";
import { BigPost } from "../components/Post/bigPost";
import Post from "../components/Post/post";

function Tags() {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-3xl">
                <Grid />
            </div>
        </div>
    )
}

function Grid() {
    const [visible, setVisible] = useState(false);
    const [imgUrl, setImageUrl] = useState(null);
    const [isMobile, setIsMobile] = useState(null);

    // get the window size
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const handleImageChange = (e) => {
        // get the url from the grid image wich is clicked
        const url = e.target.src;
        console.log(url);
        setImageUrl(url);
        setVisible(true);
    };

    const handleClose = () => {
        setImageUrl(null);
        setVisible(false);
    };

    return (
        <div className="grid grid-cols-3 gap-1 md:gap-4">
            <GridImage
                onClick={handleImageChange}
                url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440"
            />
            <GridImage
                onClick={handleImageChange}
                url="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
            />
            <GridImage
                onClick={handleImageChange}
                url="https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg"
            />
            <GridImage
                onClick={handleImageChange}
                url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440"
            />
            <GridImage
                onClick={handleImageChange}
                url="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__340.jpg"
            />
            <GridImage
                onClick={handleImageChange}
                url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440"
            />
            <GridImage
                onClick={handleImageChange}
                url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440"
            />

            <Modal
                id="modal"
                noPadding
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={handleClose}
                closeButton={isMobile}
                width={isMobile ? "100%" : "80%"}
            >
                {isMobile ? <Post imgUrl={imgUrl} /> : <BigPost imgUrl={imgUrl} />}
            </Modal>
        </div>
    );
}

export default Tags;