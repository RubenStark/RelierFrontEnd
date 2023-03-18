import { Avatar } from '@nextui-org/react';

export default function AvatarListTile({ src, username, name, children }) {
    return (

        <>
            <div className="flex items-center justify-start w-full">
                <Avatar
                    src={src}
                    size="lg"
                />
                <div className="flex flex-col ml-5">
                    <span className="font-bold">{username}</span>
                    <span className="text-sm">{name}</span>
                </div>
            </div>

            {children}
        </>

    )
}