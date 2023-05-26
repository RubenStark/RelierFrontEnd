import Link from "next/link";
import SideComp from "./sideComp";
import { useState } from "react";

// import React, { useContext } from 'react';
// import { AuthContext } from "../../utils/context";

import { useAuth } from "../../hooks/useAuth";
import { API_HOST } from "../../utils/constants";

export default function Lateral() {

    return (
        <div className="h-full bg-white fixed 2xl:w-60 xl:max-w-xs hidden xl:block shadow-lg" id="lateral">

            <AvatarSide />

            <SideComp />

        </div>
    )
}

function AvatarSide() {

    const user = useAuth();

    if (user) {
        // print each key-value pair from user object
        Object.entries(user).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
    }

    if (!user) {
        return null;
    }


    return (

        <div className="h-52 mx-5">
            <div className="flex justify-center">
                <Link href="profile">
                    <img
                        src={
                            user.avatar ?
                                API_HOST + "/media/profile_pics/" + user.avatar :
                                "https://www.w3schools.com/howto/img_avatar.png"
                        }
                        alt=""
                        className="w-20 h-20 mt-7 rounded-full border-4 border-white shadow-lg"
                    />
                </Link>
            </div>
            <span>
                <h1 className="text-center text-gray-500 font-bold">{user.name}</h1>
                <h2 className="text-center text-gray-400 font-bold">{user.username}</h2>
            </span>
        </div>

    )
}