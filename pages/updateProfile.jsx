import { Avatar, Input, Button, Textarea } from "@nextui-org/react";
import { BiMailSend } from "react-icons/bi";
import TagsPart from "../components/CreatePost/tagsPart";
import { useState } from "react";
export default function updateProfile() {
  
  const onChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("formData");
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-2xl bg-white rounded-lg">
        <div className="flex justify-center w-full mt-5">
          <div className="w-52 h-52">
            <Avatar
              size=""
              zoomed
              src="https://www.w3schools.com/howto/img_avatar.png"
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <form
            onChange={onChange}
            onSubmit={onSubmit}
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

            <TagsPart />

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
      </div>
    </div>
  );
}
