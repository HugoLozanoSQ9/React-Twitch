import Twitch from "./Twitch"
export default function NavRigth() {

    const incons = [
        <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="fill-current text-white">
            <g>
                <path fillRule="evenodd" d="M9.171 4.171A4 4 0 006.343 3H6a4 4 0 00-4 4v.343a4 4 0 001.172 2.829L10 17l6.828-6.828A4 4 0 0018 7.343V7a4 4 0 00-4-4h-.343a4 4 0 00-2.829 1.172L10 5l-.829-.829zm.829 10l5.414-5.414A2 2 0 0016 7.343V7a2 2 0 00-2-2h-.343a2 2 0 00-1.414.586L10 7.828 7.757 5.586A2 2 0 006.343 5H6a2 2 0 00-2 2v.343a2 2 0 00.586 1.414L10 14.172z" clipRule="evenodd"></path>
            </g>
        </svg>,

        <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="fill-current text-white">
            <g>
                <path d="M5 2a2 2 0 00-2 2v8a2 2 0 002 2V4h8a2 2 0 00-2-2H5z"></path>
                <path fillRule="evenodd" d="M7 8a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V8zm2 0h6v8H9V8z" clipRule="evenodd"></path>
            </g>
        </svg>

    ]

    return (
        <>
            <div className="pl-2 pt-1 col-start-1 col-end-2 flex flex-row items-center gap-3" >
                <a href="#"><Twitch /></a>

                {incons.map((icon, index) => {
                    return (
                        <button key={index} className="sm:hidden block">
                            {icon}
                        </button>
                    )
                })}
                <a href="#"><p className="hidden sm:block text-[white]">Siguiendo</p></a>

                <div className="border-b hidden sm:block border-[#bf94ff] ">
                    <a href="#"><p className="text-[#bf94ff]">Explorar</p></a>
                </div>
                <button>
                    <svg className="text-white" width="20" height="20" viewBox="0 0 20 20" focusable="false" aria-hidden="true" role="presentation">
                        <path className="fill-current" d="M10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
                    </svg>

                </button>
            </div>
        </>
    )

}