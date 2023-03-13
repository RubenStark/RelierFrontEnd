import { BiMessageRounded } from 'react-icons/bi'
import { AiOutlineHome, AiOutlineVideoCameraAdd, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import Link from 'next/link'

export default function BottomBar() {

    return (
        <div className="fixed w-full bottom-0 bg-white flex items-center justify-center"> 
            <div>

            <ul className="flex flex-row p-4 space-x-8">
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

            </div>
        </div>
    )

}

