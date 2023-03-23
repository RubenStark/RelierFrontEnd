import Link from "next/link";
import SideComp from "./sideComp";

export default function Lateral() {

    return (
        <div className="h-full bg-white fixed 2xl:w-60 xl:max-w-xs hidden xl:block shadow-lg" id="lateral">

            <AvatarSide />

            <SideComp />

        </div>
    )
}

function AvatarSide() {
    return (

        <div className="h-52 mx-5">
            <div className="flex justify-center">
                <Link href="profile">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRormNx-cWkV0Ggs-j5Jnk6g6x7JSyVqRh7uA&usqp=CAU"
                        alt=""
                        className="w-20 h-20 mt-7 rounded-full border-4 border-white shadow-lg"
                    />
                </Link>
            </div>
            <span>
                <h1 className="text-center text-gray-500 font-bold">John Doe</h1>
                <h2 className="text-center text-gray-400 font-bold">Software Engineer</h2>
            </span>
        </div>

    )
}