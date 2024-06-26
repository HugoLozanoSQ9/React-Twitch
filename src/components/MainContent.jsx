import MainExplorerItemx from "./MainExplorerItems"
import MainSearch from "./MainSearch"
import MainCard from "./MainCard"

export default function MainContent() {
    return (
        <section className=" grid grid-cols-1 grid-rows-[5rem_15rem_5rem_1fr]">

            <div className="col-start-1 col-end-3 p-6  ">

                <h1 className="text-[White] text-5xl font-Roobert font-bold">Explorar</h1>

            </div>


            <MainExplorerItemx />

            <MainSearch />

            <MainCard />


        </section>
    )
}