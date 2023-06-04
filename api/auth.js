import { API_HOST, TOKEN } from "../utils/constants";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

export function signUpApi(user) {

  const url = `${API_HOST}/signup`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  };

  return fetch(url, params)
    .then(response => {
      if (response.status === 200) {
        return { code: 200, message: "El registro ha sido correcto"};
      }
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

export function signInApi(user) {
  const url = `${API_HOST}/login`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  };

  return fetch(url, params)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { message: "Usuario o contraseña incorrectos" };
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
};

export function setTokenApi(token) {
  localStorage.setItem(TOKEN, token);
}

export function getTokenApi() {
  return localStorage.getItem(TOKEN);
}

export function logoutApi() {
  localStorage.removeItem(TOKEN);
}

export function isUserLogedApi() {
  const token = getTokenApi();

  if (!token) {
    logoutApi();
    return null;
  }
  if (isExpired(token)) {
    logoutApi();
  }
  return jwtDecode(token);
}

function isExpired(token) {
  const { exp } = jwtDecode(token);
  const expire = exp * 1000;
  const timeout = expire - Date.now();

  return timeout < 0;
}

export function updateProfileImage({ image }) {

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

}