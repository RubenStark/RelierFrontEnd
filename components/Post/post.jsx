import { API_HOST } from "../../utils/constants";
import Avatar from "../avatar";
import AddComment from "./addComment";
import { Caption, Header } from "./bigPost";
import Buttons from "./buttons";
import Comments from "./comments";

function Post({ post }) {
  //   const avatar_url = API_HOST + "/media/profile_pics/" + post.User.Avatar
  const avatar_url = "https://www.w3schools.com/howto/img_avatar.png";

  // if there is no avatar then use a default one
  var final_post = post || {
    User: {
      name: "John Doe",
      Avatar: "default.png",
    },
    caption: "This is a caption",
    CreatedAt: "2021-08-01T00:00:00.000Z",
  };

  return (
    <div className="w-full flex justify-center md:mt-10">
      <div className="w-full md:max-w-2xl bg-white rounded-lg">
        {/* Header */}
        <Header avatar_url={avatar_url} final_post={final_post} />
        <img
          src="https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg"
          alt="post of the user"
          className="w-full"
        />
        {/* Caption */}
        <Caption caption={final_post.caption} />
        <Buttons />
        <Comments />
        {/* Add a comment */}
        <AddComment />
      </div>
    </div>
  );
}

export default Post;
