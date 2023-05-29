import Grid from "../components/Profile/grid"
import Post from "../components/Post/post"
import { useState } from "react"
import classNames from 'classnames';
import { API_HOST } from "../utils/constants";
import { getTokenApi } from "../api/auth";
import { Modal, useModal, Text, StyledButton, Button } from "@nextui-org/react";
import { toast } from "react-toastify";
import Tag from "../components/tag";

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




                    {/* <div className="w-full h-10 flex -mt-10">
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
                    </div> */}
                    <InterestsOfTheUser />
                    <SelectButton setShowGrid={setShowGrid} showGrid={showGrid} />

                    {
                        showGrid ? <div className="mt-10"><Grid /></div> : <Post />
                    }

                </div>

            </div >
        </>
    )

}

function SelectButton({ setShowGrid, showGrid }) {

    const Posts = classNames({
        "bg-blue-500": showGrid,
        "bg-blue-200": !showGrid,
    });

    const Images = classNames({
        "bg-blue-200": showGrid,
        "bg-blue-500": !showGrid,
    });

    return (
        <div className="w-full h-10 flex gap-5 justify-around mt-10">
            <Button
                className={Posts}
                onClick={() => setShowGrid(true)}
                flat={!showGrid}
            >
                Fotos
            </Button>
            <Button
                className={Images}
                onClick={() => setShowGrid(false)}
                flat={showGrid}
            >
                Publicaciones
            </Button>
        </div>
    )
}

function InterestsOfTheUser() {
    return (
        <div className="w-full -mt-20 flex flex-wrap justify-center">
            <Tag tag={'bike'} />
            <Tag tag={'Ahjahfjkah'} />
            <Tag tag={'asdasd'} />
            <Tag tag={'asdvdv'} />
            <Tag tag={'hththt'} />
            <Tag tag={'hjgjyn'} />
            <Tag tag={'bike'} />
            <Tag tag={'fghfgh'} />
            <Tag tag={'gnfgn'} />
            <Tag tag={'bifnfgnke'} />
            <Tag tag={'fgn'} />
        </div>
    )
}

export default Profile
