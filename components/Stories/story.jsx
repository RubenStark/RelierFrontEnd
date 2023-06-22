import { Avatar } from "@nextui-org/react";

function Story() {
  return (
    <div className="relative" style={{ width: "136px" }}>
      <img
        className="hover:opacity-90 cursor-pointer transition duration-200 ease-in-out rounded-xl"
        src="https://picsum.photos/id/29/200/300"
        style={{ width: "136px" }}
      />
      <div className="absolute bottom-2 left-2">
        <Avatar
            src="https://www.w3schools.com/howto/img_avatar.png"
            size="md"
        />
      </div>
    </div>
  );
}

export default Story;
