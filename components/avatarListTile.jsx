import { Avatar } from "@nextui-org/react";

export default function AvatarListTile({ src, username, name, children, white }) {
  return (
    <>
      <div className="flex items-center w-full">
        <Avatar src={src} size="lg" />
        <div className="flex flex-col ml-5 justify-start">
          <span className="font-bold self-start" style={white ? { color: 'white' } : null}>{username}</span>
          <span className="text-sm self-start" style={white ? { color: 'white' } : null}>{name}</span>
        </div>
        <div className="ml-auto block">{children}</div>
      </div>
    </>
  );
}
