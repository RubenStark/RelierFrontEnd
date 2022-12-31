import React from 'react'
import Avatar from './avatar'
import { AiOutlineHome, AiOutlineVideoCameraAdd, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import Link from 'next/link'
import { BiMessageRounded } from 'react-icons/bi'

function Navbar() {
    return (
        <nav className="fixed w-full z-20 top-0 left-0 bg-white">

            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Relier</span>
                </Link>
                <ul className="flex flex-row p-4 mt-4 space-x-8">
                    <li>
                        <Link href="/" className='w-10'>
                            <AiOutlineHome size={22} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='w-10'>
                            <AiOutlineSearch size={22} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='w-10'>
                            <AiOutlineVideoCameraAdd size={22} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='w-10'>
                            <AiOutlineHeart size={22} />
                        </Link>
                    </li>

                </ul>
                <div className='flex items-center gap-5'>
                    <Link href='messages'>
                        <BiMessageRounded size={22} />
                    </Link>
                    <Link href='profile'>
                        <Avatar url='https://www.w3schools.com/howto/img_avatar.png' />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar