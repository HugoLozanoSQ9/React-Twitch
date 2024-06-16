export default function MainExplorerItemx() {

    const items = [
        {
            name: "Juegos",
            img: "https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg"
        },
        {
            name: "IRL",
            img: "https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg"
        },
        {
            name: "Música",
            img: "https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg"
        },
        {
            name: "Creative",
            img: "https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg"
        },
        {
            name: "Esports",
            img: "https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg"
        },

    ]
    return (
        <>
            {items.map((item) => {
                return (
                    <div className="bg-[#5c16c5] rounded-md flex justify-evenly items-center gap-10 w-[47%] h-[23%] sm:w-[32%] lg:w-[24%] xl:w-[19%] ">
                        <p className="text-[24px]">{item.name}</p>
                        <img src={item.img} className="" alt="" />
                    </div>
                )
            })}
            <div className="w-full">
                <a href="#">
                    <p className="text-[#bf94ff] text-2xl  "> <span className="border-b border-[#bf94ff]">
                        Categorías </span>
                        <a href="#">
                            <span className="text-[White] text-xl pl-6 ">
                                Canales en Vivo
                            </span>
                        </a>
                    </p>
                </a>
            </div>

        </>
    )
}