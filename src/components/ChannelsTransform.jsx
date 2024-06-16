import clsx from "clsx"
export default function ChannelsTransform({ img, title, status, type, views }) {
    return (

        <div className="lg:grid lg:grid-cols-[3rem_8rem_3.1rem] lg:grid-rows-[2rem_1fr]">

            <a href="#">
                <div className=" w-8 h-8 lg:col-start-1 lg:col-end-2">
                    <img src={img} className="w-full h-full rounded-full" alt="" />
                </div>
            </a>

            <a href="#" className="hidden lg:block">
                <div className="text-[white] lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
                    <span> {title} </span>
                    <br />
                    <span className="text-[0.8rem] text-[#adadb8]"> {clsx(type, { "": type == null })} </span>
                </div>
            </a>

            <div className={clsx("hidden lg:col-start-3 lg:col-end-4 w-full lg:flex lg:items-center lg:justify-center lg:gap-2 ", {"lg:hidden":!status})}>
                
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                <span className="text-[.7rem] text-[white]">{views}</span>
        
            </div>

            <div className={clsx("hidden lg:col-start-3 lg:col-end-4 w-full lg:flex lg:items-center lg:justify-center lg:gap-2 ", {"lg:hidden":status})}>
                <span className="text-[#dedee3] text-[0.6rem]"> Desconectado </span>
            </div>

        </div>


    )
}