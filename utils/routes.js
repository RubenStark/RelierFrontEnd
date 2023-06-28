import {
    AiOutlineHome,
    AiOutlineVideoCameraAdd,
    AiOutlineSearch,
    AiOutlineHeart,
    AiOutlineCheckSquare,
} from "react-icons/ai";

import { BsPersonCheck } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";

const size = 22;
const collpasedSize = 30;

const icons = [
  {
    text: "Home",
    icon: <AiOutlineHome size={size} />,
    collapsedIcon: <AiOutlineHome size={collpasedSize} />,
    count: 1,
    link: "/",
  },
  {
    text: "Search",
    icon: <AiOutlineSearch size={size} />,
    collapsedIcon: <AiOutlineSearch size={collpasedSize} />,
    count: 0,
    link: "search",
  },
  {
    text: "Meet",
    icon: <BsPersonCheck size={size} />,
    collapsedIcon: <BsPersonCheck size={collpasedSize} />,
    count: 0,
    link: "meet",
  },
  {
    text: "Create",
    icon: <IoCreateOutline size={size} />,
    collapsedIcon: <IoCreateOutline size={collpasedSize} />,
    count: 0,
    link: "createPost",
  },
  {
    text: "Notifications",
    icon: <AiOutlineHeart size={size} />,
    collapsedIcon: <AiOutlineHeart size={collpasedSize} />,
    count: 10,
    link: "notifications",
  },
  {
    text: "Messages",
    icon: <BiMessageRounded size={size} />,
    collapsedIcon: <BiMessageRounded size={collpasedSize} />,
    count: 5,
    link: "messages",
  },
  // {
  //   text: "VideoChat",
  //   icon: <AiOutlineVideoCameraAdd size={size} />,
  //   collapsedIcon: <AiOutlineVideoCameraAdd size={collpasedSize} />,
  //   count: 1,
  //   link: "videochat",
  // },
  // {
  //   text: "Liked",
  //   icon: <AiOutlineCheckSquare size={size} />,
  //   collapsedIcon: <AiOutlineCheckSquare size={collpasedSize} />,
  //   count: 0,
  //   link: "liked",
  // },
];


export default icons;