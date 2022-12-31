import { BiLike, BiLaugh } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";

function Button({ like, laugh, love }) {

    if (like) {
        var color = 'bg-blue-500 rounded-lg'
        var word = 'Like'
    }
    if (laugh) {
        var color = 'bg-yellow-500 rounded-lg'
        var word = 'Laugh'
    }
    if (love) {
        var color = 'like-btn-red rounded-lg'
        var word = 'Love'
    }

    return (

        <div className="hover:-translate-y-1 duration-200 hover:scale-110">
            <div className={color}>
                <div className="flex items-center mx-5 h-9">
                    <span className="text-lg font-medium text-gray-50">
                        {word}
                    </span>
                    <div className="mx-1"></div>
                    {
                        like && <BiLike className="mt-1" color="white" fill="white" style={{ color: 'red' }} />
                    }
                    {
                        laugh && <BiLaugh className="mt-1" color="white" />
                    }
                    {
                        love && <BsHeart className="mt-1" color="white" />
                    }
                </div>
            </div>
        </div>


    )

}

export default Button