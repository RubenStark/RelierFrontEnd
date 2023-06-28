import { API_HOST } from "../utils/constants";
import { getTokenApi } from "./auth";

export function CreatePost() {

    console.log("Creando post");

    const token = getTokenApi();

    fetch(`${API_HOST}/posts/create`, {
        method: 'POST', //This could be any http method
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            caption: "Post desde react 2",
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
        }
        )

}