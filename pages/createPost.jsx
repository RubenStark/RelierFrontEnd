import { Button, StyledButton, Textarea } from "@nextui-org/react";
import Avatar from "../components/avatar";
import TagsPart from "../components/CreatePost/tagsPart";
import UploadImage from "../components/CreatePost/uploadImage";
import CustomDivider from "../components/divider";
import useImageUploader from "../hooks/useImageUpload";

function CreatePost() {

    const { images, imageUrl, handleChange } = useImageUploader();


    return (
        <CreatePostMobile images={images} imageUrl={imageUrl} handleChange={handleChange} />
    )
}

function CreatePostMobile({ images, imageUrl, handleChange }) {

    return (
        <>
            <div className="w-screen height-minus-navbar mb-20">
                <div className="h-full w-full flex flex-col lg:px-20 justify-center">

                    <div className="flex items-center p-5 bg-white">
                        <Avatar url='https://www.w3schools.com/howto/img_avatar.png' />
                        <span className="font-semibold ml-4">Username</span>
                        {imageUrl ?
                            <div className="ml-auto block">
                                <StyledButton size="sm">Publicar</StyledButton>
                            </div>
                            :
                            <div className="ml-auto block">
                                <Button disabled size="sm">Publicar</Button>
                            </div>
                        }
                    </div>
                    <CustomDivider />
                    <UploadImage />
                    <CustomDivider />
                    <div className="h-full  bg-white">
                        <Textarea
                            fullWidth
                            minRows={5}
                            maxRows={20}
                            underlined
                            color="primary"
                            labelPlaceholder="Describe tu post"
                        />
                        <CustomDivider />
                        <TagsPart />
                    </div>
                </div>
            </div>
        </>
    )
}

function CreatePostPc() {

    return (
        <>
            <div className="w-screen height-minus-navbar">
                <div className="h-full w-full flex lg:px-20 justify-center">
                    <UploadImage />
                    <div className="h-full w-1/2 bg-white">
                        <div className="flex items-center p-5">
                            <Avatar url='https://www.w3schools.com/howto/img_avatar.png' />
                            <div className="flex flex-col ml-4">
                                <span className="font-semibold">Username</span>
                            </div>
                        </div>
                        <textarea className="w-full h-1/2 p-5 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                            placeholder="What's on your mind?" />
                        <TagsPart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost