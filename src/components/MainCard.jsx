import clsx from "clsx"
export default function MainCard() {
    const cards = [
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            title: "Conversaciones",
            tags: ['IRL', 'RPG'],
            views: "412.2K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            title: "Rust",
            tags: [],
            views: "125.4K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            title: "Special Events",
            tags: ['IRL'],
            views: "67.8K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            title: "League Of Legends",
            tags: ['RPG', 'Estrategia'],
            views: "940.5K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
            title: "Kings League",
            tags: [],
            views: "350.2K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
            title: "Minecraft",
            tags: ['Simulacion'],
            views: "512.4K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
            title: "Valorant",
            tags: ['Shooter', 'RPG'],
            views: "750.3K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            title: "Fortnite",
            tags: ['IRL', 'RPG', 'Simulacion'],
            views: "1.2M espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            title: "Conversaciones",
            tags: ['IRL', 'RPG'],
            views: "412.2K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            title: "Rust",
            tags: [],
            views: "125.4K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            title: "Special Events",
            tags: ['IRL'],
            views: "67.8K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            title: "League Of Legends",
            tags: ['RPG', 'Estrategia'],
            views: "940.5K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
            title: "Kings League",
            tags: [],
            views: "350.2K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
            title: "Minecraft",
            tags: ['Simulacion'],
            views: "512.4K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
            title: "Valorant",
            tags: ['Shooter', 'RPG'],
            views: "750.3K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            title: "Fortnite",
            tags: ['IRL', 'RPG', 'Simulacion'],
            views: "1.2M espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            title: "Conversaciones",
            tags: ['IRL', 'RPG'],
            views: "412.2K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            title: "Rust",
            tags: [],
            views: "125.4K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            title: "Special Events",
            tags: ['IRL'],
            views: "67.8K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            title: "League Of Legends",
            tags: ['RPG', 'Estrategia'],
            views: "940.5K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
            title: "Kings League",
            tags: [],
            views: "350.2K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
            title: "Minecraft",
            tags: ['Simulacion'],
            views: "512.4K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
            title: "Valorant",
            tags: ['Shooter', 'RPG'],
            views: "750.3K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            title: "Fortnite",
            tags: ['IRL', 'RPG', 'Simulacion'],
            views: "1.2M espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            title: "Conversaciones",
            tags: ['IRL', 'RPG'],
            views: "412.2K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            title: "Rust",
            tags: [],
            views: "125.4K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            title: "Special Events",
            tags: ['IRL'],
            views: "67.8K espectadores"
        },
        {
            img: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            title: "League Of Legends",
            tags: ['RPG', 'Estrategia'],
            views: "940.5K espectadores"
        },
    ];
    

    return (

        <>

            <div className="col-start-1 col-end-2 flex flex-wrap p-6 w-full gap-4">
                {cards.map((card, index) => (
                    <div key={index} className="w-[45%] sm:w-[30%] md:w-[20%] lg:w-[17.5%]">
                        <img src={card.img} alt="" />
                        <div className="pt-1">
                            <p className="text-[white] font-bold flex justify-between">
                                {card.title}
                                <span>
                                    <svg width="20" height="20" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" role="presentation" aria-hidden="true" focusable="false" className="ScIconSVG-sc-1q25cff-1 jpczqG">
                                        <g>
                                            <path fill="white" d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </g>
                                    </svg>
                                </span>
                            </p>
                            <p className="text-[#dedee3] text-sm">
                                {card.views}
                            </p>
                        </div>
                        <div className="">
                            <p className="text-[#dedee3] text-sm pt-1">
                                <span className={clsx({"bg-[#53535f61] rounded-full p-1":card.tags.length > 0})}>{card.tags}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>


        </>

    )
}