import Comment from "./comment";

function Comments() {
    return (
        <div className="antialiased p-5">

            <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
            <div className="space-y-4">

                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <div className="w-full flex justify-center">
                    <button className="text-sm text-blue-500">Show More Comments</button>
                </div>

            </div>
        </div>
    );

}

export default Comments