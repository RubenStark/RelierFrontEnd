export default function SkeletonPost() {
    return (
        <div className="w-full flex justify-center mt-10">
            <div className="max-w-2xl bg-white rounded-lg w-full loading">
                <div className="flex items-center w-full mt-5">
                    <div className="rounded-full bg-slate-200 w-10 h-10 ml-5"></div>
                    <div className="w-full">
                        <div className="w-3/4 h-2 bg-slate-200 mx-5"></div>
                        <div className="w-1/2 h-2 bg-slate-200 mt-2 mx-5"></div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="h-2 bg-slate-200 mx-5"></div>
                    <div className="h-2 bg-slate-200 mt-2 mx-5"></div>
                    <div className="h-2 bg-slate-200 mt-2 mx-5"></div>
                    <div className="h-2 bg-slate-200 mt-2 mx-5"></div>
                    <div className="h-2 bg-slate-200 mt-2 mx-5 mb-5"></div>
                </div>
            </div>
        </div>
    )
}
