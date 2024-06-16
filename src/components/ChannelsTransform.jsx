export default function ChannelsTransform({ img, title, status, Type }) {
    return (

        <div className="lg:grid lg:grid-cols-[3rem_8rem_3rem] ">

            <a href="#">
                <div className=" w-8 h-8 ">
                    <img src={img} className="w-full h-full rounded-full" alt="" />
                </div>

            </a>
        </div>


    )
}