import { Button, StyledButton, Textarea } from "@nextui-org/react";
import Avatar from "../components/avatar";
import TagsPart from "../components/CreatePost/tagsPart";
import UploadImage from "../components/CreatePost/uploadImage";
import CustomDivider from "../components/divider";
import useImageUploader from "../hooks/useImageUpload";
import { use, useEffect, useState } from "react";
import { getTokenApi } from "../api/auth";
import { Router, useRouter } from "next/router";
import { toast } from "react-toastify";

function CreatePost() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  if (isMobile) return <CreatePostMobile />;

  return <CreatePostPc />;
}

function CreatePostMobile() {
  const [readyToPublish, setReadyToPublish] = useState(true);
  const { image, imageUrl, clearImages, handleImageChange } =
    useImageUploader();
  const [parentTags, setParentTags] = useState([]);
  const [caption, setCaption] = useState(null);
  const router = useRouter()

  // useEffect(() => {
  //   console.log(parentTags);
  // }, [parentTags]);


  function handleCreation() {
    console.log("handleCreation");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);

    // Dar formato adecuado a los intereses
    const interests = parentTags.map(tag => ({ interest: tag }));
    formData.append("interests", JSON.stringify(interests));

    const token = getTokenApi();
    console.log(parentTags)
    fetch("http://localhost:8000/posts/create", {
      method: "POST",
      body: formData,
      headers: {
        'Authorization': token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.caption) {
          toast.success("Post subido correctamente");
          clearImages();
          setCaption(null);
          setParentTags([]);
          router.push("/");
        }
      }
      ).catch((err) => toast.error("Hubo un error al subir tu post"));

  }

  return (
    <>
      <div className="w-screen min-height-minus-navbar mb-20">
        <div className="h-full w-full flex flex-col lg:px-20 justify-center">
          <div className="flex items-center p-5 bg-white">
            <Avatar url="https://www.w3schools.com/howto/img_avatar.png" />
            <span className="font-semibold ml-4">Username</span>
            <div className="ml-auto block">
              <Button
                flat
                size="sm"
                className={readyToPublish ? "bg-blue-200" : "bg-gray-300"}
                disabled={!readyToPublish}
                onPress={handleCreation}
              >
                Publicar
              </Button>
            </div>
          </div>
          <CustomDivider />
          <UploadImage
            image={image}
            imageUrl={imageUrl}
            clearImages={clearImages}
            handleImageChange={handleImageChange}
          />
          <CustomDivider />
          <div className="h-full  bg-white">
            <Textarea
              onChange={(e) => {
                setCaption(e.target.value);
              }
              }
              fullWidth
              minRows={5}
              maxRows={20}
              underlined
              color="primary"
              labelPlaceholder="Describe tu post"
            />
            <CustomDivider />
            <TagsPart setParentTags={setParentTags} />
          </div>
        </div>
      </div>
    </>
  );
}

function CreatePostPc() {

  const [parentTags, setParentTags] = useState([]);


  return (
    <>
      <div className="w-screen height-minus-navbar">
        <div className="h-full w-full flex lg:px-20 justify-center">
          <UploadImage />
          <div className="h-full w-1/2 bg-white">
            <div className="flex items-center p-5">
              <Avatar url="https://www.w3schools.com/howto/img_avatar.png" />
              <div className="flex flex-col ml-4">
                <span className="font-semibold">Username</span>
              </div>
            </div>
            <button onPress={() => {
              CreatePost();
            }
            }>Hello</button>
            <textarea
              className="w-full h-1/2 p-5 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              placeholder="What's on your mind?"
            />
            <TagsPart setParentTags={setParentTags} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
