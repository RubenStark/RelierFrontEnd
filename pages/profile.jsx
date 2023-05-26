import Grid from "../components/Profile/grid"
import Post from "../components/Post/post"
import { use, useEffect, useState } from "react"
import Navbar from "../components/navbar"
import classNames from 'classnames';
import { API_HOST } from "../utils/constants";
import { getTokenApi } from "../api/auth";
import { Modal, useModal, Button, Text, StyledButton } from "@nextui-org/react";
import { IoHeartCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";

function Profile() {
    const [showGrid, setShowGrid] = useState(true)
    const [image, setImage] = useState(null);
    const [imgUrl, setImgUrl] = useState('');

    const { setVisible, bindings } = useModal();

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setImgUrl(URL.createObjectURL(e.target.files[0]));
    };
    
    const handleSubmit = () => {

        if (!image) {
            console.error('Image is not loaded yet.');
            return;
        }

        const url = `${API_HOST}/add-avatar`;
        const formData = new FormData();
        formData.append('file', image);

        const token = getTokenApi();

        fetch(url, {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: token
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.error(data.message);
                toast.success("Imagen subida correctamente");
            })
            .catch((error) => {
                console.error('Error while uploading image:', error);
                toast.error("Error al subir la imagen");
            });

        setImage(null);
        setVisible(false);

    };


    const Posts = classNames({
        'bg-blue-500': showGrid,
        'bg-blue-600': !showGrid,
        'hover:bg-blue-600': true,
        'text-white': true,
        'font-bold': true,
        'py-2': true,
        'px-4': true,
        'rounded-xl': true,
    });

    const Images = classNames({
        'bg-blue-500': !showGrid,
        'bg-blue-600': showGrid,
        'hover:bg-blue-600': true,
        'text-white': true,
        'font-bold': true,
        'py-2': true,
        'px-4': true,
        'rounded-xl': true,
    });

    return (
        <>

            <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                    {/* Banner */}
                    <img
                        src="https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg"
                        alt="post"
                        className="inset-0 w-full h-80 object-cover"
                    />

                    {/* ProfileImg */}

                    <img
                        className="w-52 h-52 rounded-full mx-auto border-4 border-white relative -top-28 cursor-pointer hover:brightness-50"
                        src={imgUrl || 'https://www.w3schools.com/howto/img_avatar.png'}
                        alt="Avatar"
                        onClick={() => setVisible(true)}
                    />



                    <Modal
                        scroll
                        width="600px"
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                        {...bindings}
                    >
                        <Modal.Header>
                            <Text id="modal-title" size={18}>
                                Actualizar foto de perfil
                            </Text>
                        </Modal.Header>
                        <Modal.Body>
                            <div id="modal-description">
                                <div className="w-full flex justify-center items-center my-10">
                                    <label htmlFor="imageInput">
                                        <img
                                            className="w-52 rounded-full border-4 border-white cursor-pointer hover:brightness-50"
                                            src={imgUrl || 'https://www.w3schools.com/howto/img_avatar.png'}
                                            alt="Avatar"
                                        />
                                        <input
                                            name="avatar"
                                            id="imageInput"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <StyledButton auto flat color="error" onClick={() => setVisible(false)}>
                                Close
                            </StyledButton>
                            {
                                image ? <StyledButton auto onClick={handleSubmit}>Change Image</StyledButton> :
                                    <Button disabled>Change image</Button>
                            }
                        </Modal.Footer>
                    </Modal>



                    <div className="w-full h-10 flex -mt-10">
                        <button
                            onClick={() => setShowGrid(true)}
                            className="w-1/2 flex justify-center items-center border border-b-gray-600 mx-5">
                            <span className={Images}>Images</span>
                        </button>
                        <button
                            onClick={() => setShowGrid(false)}
                            className="w-1/2 flex justify-center items-center border border-b-gray-600 mx-5">
                            <span className={Posts}>Posts</span>
                        </button>
                    </div>

                    {
                        showGrid ? <div className="mt-10"><Grid /></div> : <Post />
                    }

                </div>
            </div >
        </>
    )

}

export default Profile

function ImageModal() {
    return (
        <Modal
            scroll
            width="600px"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Modal with a lot of content
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Text id="modal-description">
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et.
                </Text>
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onPress={() => setVisible(false)}>
                    Close
                </Button>
                <Button auto onPress={() => setVisible(false)}>
                    Agree
                </Button>
            </Modal.Footer>
        </Modal>
    )
}