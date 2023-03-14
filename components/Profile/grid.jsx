import GridImage from "../gridImage";

function Grid() {
    return (
        <div className="grid grid-cols-3 gap-1 md:gap-4">
            <GridImage url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" />
            <GridImage url="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" />
            <GridImage url="https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg" />
            <GridImage url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" />
            <GridImage url="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__340.jpg" />
            <GridImage url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" />
            <GridImage url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" />
        </div>
    );
}

export default Grid;