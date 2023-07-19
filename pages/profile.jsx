import Post from "../components/Post/post";
import GridImage from "../components/gridImage";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { updateProfileImage } from "../api/auth";
import { Modal, useModal, Text, StyledButton, Button, Input, Textarea } from "@nextui-org/react";
import Tag from "../components/tag";

import { BigPost } from "../components/Post/bigPost";
import useImageUploader from "../hooks/useImageUpload";
import TagsPart from "../components/CreatePost/tagsPart";

function Profile() {
  const [parentTags, setParentTags] = useState([]);
  const [showGrid, setShowGrid] = useState(true);
  const { setVisible, bindings } = useModal();
  const { image, imageUrl, clearImages, handleImageChange } =
    useImageUploader();

  const handleClose = () => {
    setVisible(false);
    clearImages();
  };

  const handleSubmit = () => {
    if (!image) {
      console.error("Image is not loaded yet.");
      return;
    }
    updateProfileImage(image);
    setVisible(false);
    clearImages();
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
            src="https://www.w3schools.com/howto/img_avatar.png"
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
                        imageUrl ||
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
              <div className="w-full flex justify-center">
          <form
            // onChange={onChange}
            // onSubmit={onSubmit}
            className="w-11/12 md:w-3/4"
          >
            <Input
              clearable
              underlined
              fullWidth
              color="primary"
              size="lg"
              placeholder="rubenskays777"
              //   contentLeft={<BiMailSend fill="currentColor" />}
              //   value={formData.username}
              label="Username"
              name="username"
            />
            <div className="h-5" />

            <Input
              clearable
              underlined
              fullWidth
              color="primary"
              size="lg"
              placeholder="Ruben Skays"
              //   contentLeft={<BiMailSend fill="currentColor" />}
              //   value={formData.name}
              label="Name"
              name="name"
            />
            <div className="h-5" />

            <Textarea
              placeholder="I know im getting warm cuz i feel so cold"
              label="Descripcion"
              minRows={3}
              underlined
              width="100%"
              color="primary"
            />
            <div className="h-5" />

            <TagsPart setParentTags={setParentTags}/>

            <div className="my-5 flex justify-center">
              <Button
              flat
                className="bg-blue-200"
                type="submit"
              >
                Submit
              </Button>
            </div>
            <div className="h-5" />
          </form>
        </div>
            </Modal.Body>
            <Modal.Footer>
              <StyledButton auto flat color="error" onClick={handleClose}>
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

export default Profile;
