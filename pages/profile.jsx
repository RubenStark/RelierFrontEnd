import Post from "../components/Post/post";
import GridImage from "../components/gridImage";
import { use, useEffect, useState } from "react";
import classNames from "classnames";
import { API_HOST } from "../utils/constants";
import { getTokenApi } from "../api/auth";
import {
  Modal,
  useModal,
  Text,
  StyledButton,
  Button,
  Input,
  Card,
  Avatar,
  Image,
} from "@nextui-org/react";
import { toast } from "react-toastify";
import Tag from "../components/tag";
import AvatarListTile from "../components/avatarListTile";
import CustomDivider from "../components/divider";
import Buttons from "../components/Post/buttons";
import Comments from "../components/Post/comments";
import AddComment from "../components/Post/addComment";
import Comment from "../components/Post/comment";

function Profile() {
  const [showGrid, setShowGrid] = useState(true);
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState("");

  const { setVisible, bindings } = useModal();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    if (!image) {
      console.error("Image is not loaded yet.");
      return;
    }

    const url = `${API_HOST}/add-avatar`;
    const formData = new FormData();
    formData.append("file", image);

    const token = getTokenApi();

    fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.error(data.message);
        toast.success("Imagen subida correctamente");
      })
      .catch((error) => {
        console.error("Error while uploading image:", error);
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
            src={imgUrl || "https://www.w3schools.com/howto/img_avatar.png"}
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
                      src={
                        imgUrl ||
                        "https://www.w3schools.com/howto/img_avatar.png"
                      }
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
              <StyledButton
                auto
                flat
                color="error"
                onClick={() => setVisible(false)}
              >
                Close
              </StyledButton>
              {image ? (
                <StyledButton auto onClick={handleSubmit}>
                  Change Image
                </StyledButton>
              ) : (
                <Button disabled>Change image</Button>
              )}
            </Modal.Footer>
          </Modal>

          <InterestsOfTheUser />
          <SelectButton setShowGrid={setShowGrid} showGrid={showGrid} />

          {showGrid ? (
            <div className="mt-10">
              <Grid />
            </div>
          ) : (
            <Post />
          )}
        </div>
      </div>
    </>
  );
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
  );
}

function InterestsOfTheUser() {
  return (
    <div className="w-full -mt-20 flex flex-wrap justify-center">
      <Tag tag={"bike"} />
      <Tag tag={"Ahjahfjkah"} />
      <Tag tag={"asdasd"} />
      <Tag tag={"asdvdv"} />
      <Tag tag={"hththt"} />
      <Tag tag={"hjgjyn"} />
      <Tag tag={"bike"} />
      <Tag tag={"fghfgh"} />
      <Tag tag={"gnfgn"} />
      <Tag tag={"bifnfgnke"} />
      <Tag tag={"fgn"} />
    </div>
  );
}

function Grid() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-4">
      <GridImage
        onClick={() => setVisible(true)}
        url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440"
      />
      <GridImage url="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" />
      <GridImage url="https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg" />
      <GridImage url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" />
      <GridImage url="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__340.jpg" />
      <GridImage url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" />
      <GridImage url="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" />

      <Modal
        id="modal"
        noPadding
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={() => setVisible(false)}
        width="80%"
      >
        <BigPost />
      </Modal>
    </div>
  );
}

export default Profile;


function BigPost() {
    return (
        <div className="w-full height-minus-navbar grid grid-cols-3 bg-gray-100">
      <Image
        src="https://images.unsplash.com/photo-1685371863623-effd71822cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt="post"
        className="w-full object-cover col-span-2"
      />

      <div className="bg-white height-minus-navbar relative">
        <div className="mx-5 my-3">
          <AvatarListTile
            src="https://www.w3schools.com/howto/img_avatar.png"
            username={"Juan"}
            name={"Juan_777"}
          >
            <Button flat size={"sm"} className="bg-blue-200">
              Follow
            </Button>
          </AvatarListTile>
        </div>
        <CustomDivider />

        <div className="mx-5 my-3 flex justify-start">
          <span className="font-normal">
            Hello this is Ruben Skays from Poisoned Lips
          </span>
        </div>

        <CustomDivider />
        <div className="flex flex-wrap mx-5 my-2">
          <Tag tag={"Flower"} />
          <Tag tag={"nature"} />
          <Tag tag={"yewllow"} />
          <Tag tag={"cold play"} />
          <Tag tag={"bring me the "} />
        </div>

        <div className="bg-white flex items-center justify-between px-5 absolute bottom-0 w-full p-5">
          <div className="flex items-center">
            <Avatar src="https://www.w3schools.com/howto/img_avatar.png" />
          </div>
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full p-2 ml-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="ml-4">
            <span className="text-blue-500 font-semibold">Post</span>
          </button>
        </div>

        <div className="h-3/4 overflow-y-scroll">
          <Comments />
        </div>
      </div>
    </div>
    );
  }