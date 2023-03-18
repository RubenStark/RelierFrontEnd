import { AiOutlineHome, AiOutlineVideoCameraAdd, AiOutlineSearch, AiOutlineHeart, AiOutlineCheckSquare } from 'react-icons/ai'
import { IoCreateOutline } from 'react-icons/io5'
import { BiMessageRounded } from 'react-icons/bi'
import Link from 'next/link'

export default function SideComp() {


    const sideIcons = [
        {
            icon: <AiOutlineHome size={20} />,
            mobileIcon: <AiOutlineHome size={30} />,
            text: 'Home',
            count: 1,
            link: '/'
        },
        {
            icon: <AiOutlineSearch size={20} />,
            mobileIcon: <AiOutlineSearch size={30} />,
            text: 'Search',
            count: 0,
            link: 'search'
        },
        {
            icon: <IoCreateOutline size={20} />,
            mobileIcon: <IoCreateOutline size={30} />,
            text: 'Create',
            count: 0,
            link: 'create'
        },
        {
            icon: <AiOutlineHeart size={20} />,
            mobileIcon: <AiOutlineHeart size={30} />,
            text: 'Notifications',
            count: 10,
            link: 'notifications'
        },
        {
            icon: <BiMessageRounded size={20} />,
            mobileIcon: <BiMessageRounded size={30} />,
            text: 'Messages',
            count: 5,
            link: 'messages'
        },
        {
            icon: <AiOutlineVideoCameraAdd size={20} />,
            mobileIcon: <AiOutlineVideoCameraAdd size={30} />,
            text: 'VideoChat',
            count: 1,
            link: 'videochat'
        },
        {
            icon: <AiOutlineCheckSquare size={20} />,
            mobileIcon: <AiOutlineCheckSquare size={30} />,
            text: 'Liked',
            count: 0,
            link: 'liked'
        }
    ]


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
                        <div className="grid grid-cols-6 hover:bg-gray-300 items-center gap-5 py-2 transition ease-in-out delay-75">
                            <div className="col-span-1"></div>
                            <Link href={item.link}>
                                <div className="col-span-1">
                                    {item.icon}
                                </div>
                            </Link>
                            <div className="text-gray-500 font-bold col-span-3">
                                <Link href={item.link}>
                                    {item.text}
                                </Link>
                            </div>
                            <div className="col-span-1">
                                {item.count > 0 && <div className="bg-blue-500 rounded-full w-5 h-5 text-white text-xs flex justify-center items-center">{item.count}</div>}
                            </div>
                        </div>
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
                        <Link href={item.link}>
                            {item.mobileIcon}
                        </Link>
                    )
                })
            }
        </div>
    )
}