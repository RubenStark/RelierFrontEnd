import { url } from "../utils/constants";

// A function to fetch posts from the API
export const fetchPosts = async () => {
    const res = await fetch(url + "/posts/", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
    }
