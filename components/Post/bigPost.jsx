import { Button, Image, Input } from "@nextui-org/react";
import AvatarListTile from "../../components/avatarListTile";
import CustomDivider from "../../components/divider";
import Comments from "../../components/Post/comments";
import Tag from "../tag";
import Avatar from "../avatar";
import AddComment from "./addComment";

export function BigPost({ imgUrl }) {
  const final_post = {
    User: {
      name: "John Doe",
      Avatar: "default.png",
    },
    caption: "This is a caption",
    CreatedAt: "2021-08-01T00:00:00.000Z",
  };

  return (
    <div className="w-full height-minus-navbar grid grid-cols-3 bg-gray-100">
      <Image
        src={imgUrl}
        alt="post"
        className="object-cover w-full h-full col-span-2"
      />
      <div className="bg-white height-minus-navbar relative">
        <Header
          avatar_url={"https://www.w3schools.com/howto/img_avatar.png"}
          final_post={final_post}
        />
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
          <Input placeholder="Add a comment" status="primary" />
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

export function Caption({ caption }) {
  return (
    <div className="p-5 flex">
      <span className="font-mediumself-start">{caption}</span>
    </div>
  );
}

export function Header({ avatar_url, final_post }) {
  function timeSince(post) {
    const now = new Date();
    const createdAt = new Date(post);
    const diff = now.getTime() - createdAt.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days === 1 ? "" : "s"} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    } else {
      return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
    }
  }

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center">
        <Avatar url={avatar_url} />
        <div className="flex flex-col ml-4">
          <span className="font-semibold">{final_post.User.name}</span>
          <span className="text-xs text-gray-500">
            {timeSince(final_post.CreatedAt)}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <button className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
