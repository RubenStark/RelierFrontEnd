import { useState } from "react";
import { API_HOST } from "../utils/constants";

export default function SendAvatar() {

        const [image, setImage] = useState(null);
        const [error, setError] = useState(null);

        const handleImageChange = (e) => {
            setImage(e.target.files[0]);
        };

        const handleSubmit = (e) => {
            e.preventDefault();

            if (!image) {
                setError('Please select an image');
                return;
            }

            const url = `${API_HOST}/add-avatar`;
            const formData = new FormData();
            formData.append('file', image);

            fetch(url, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    console.error(data.message);
                })
                .catch((error) => {
                    console.error('Error while uploading image:', error);
                });
        };

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <button type="submit">Upload</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        );
    
}