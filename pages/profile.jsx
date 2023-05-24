import Grid from "../components/Profile/grid"
import Post from "../components/Post/post"
import { useState } from "react"
import Navbar from "../components/navbar"
import classNames from 'classnames';
import { Button } from "@nextui-org/react";
import { API_HOST } from "../utils/constants";
import { getTokenApi } from "../api/auth";

function Profile() {
    const [showGrid, setShowGrid] = useState(true)
    const [image, setImage] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);

        //wait for image to be loaded
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImgUrl(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);

        setTimeout(() => {
            handleSubmit(e);
        }, 2500);
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
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
            })
            .catch((error) => {
                console.error('Error while uploading image:', error);
            });
    }


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
                    <label htmlFor="imageInput">
                        <img
                            className="w-52 h-52 rounded-full mx-auto border-4 border-white relative -top-28 cursor-pointer hover:brightness-50"
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
            </div>
        </>
    )

}

export default Profile