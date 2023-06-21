import { AiOutlineHome, AiOutlineVideoCameraAdd, AiOutlineSearch, AiOutlineHeart, AiOutlineCheckSquare } from 'react-icons/ai'
import { IoCreateOutline } from 'react-icons/io5'
import { BiMessageRounded } from 'react-icons/bi'
import { BsPersonCheck } from "react-icons/bs"
import Link from 'next/link'
import icons from "../../utils/routes";
import { Card } from '@nextui-org/react'

export default function SideComp() {


    const sideIcons = icons


    return (

        <>
            <div className='hidden 2xl:block'>
                <ComputerSideComp sideIcons={sideIcons} />
            </div>

            <div className='2xl:hidden'>
                <MobileSideComp sideIcons={sideIcons} />
            </div>
        </>


    )
}

function ComputerSideComp({ sideIcons }) {

    return (

        <>

            {
                sideIcons.map((item, index) => {
                    return (
                        <Link href={item.link} key={index}>
                            <Card isPressable variant='flat' isHoverable className='bg-white' 
                            css={{ "border-style": "none", "border-radius": "0px"}}>
                            <div className="grid grid-cols-7 hover:bg-gray-300 items-center gap-5 py-2 transition ease-in-out delay-75">
                                <div className="col-span-1"></div>
                                <div className="col-span-1">
                                    {item.icon}
                                </div>
                                <div className="text-gray-700 font-normal col-span-3 text-lg">
                                    {item.text}
                                </div>
                                <div className="col-span-1">
                                    {item.count > 0 && <div className="bg-blue-500 rounded-full w-5 h-5 text-white text-xs flex justify-center items-center">{item.count}</div>}
                                </div>
                            </div>
                            </Card>
                        </Link>
                    )
                })
            }

        </>

    )
}

function MobileSideComp({ sideIcons }) {

    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            {
                sideIcons.map((item, index) => {
                    return (
                        <Link href={item.link} key={index}>
                            {item.collapsedIcon}
                        </Link>
                    )
                })
            }
        </div>
    )
}