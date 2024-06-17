export default function MainSearch() {
    return (
        <div className="col-start-1 col-end-3 pl-6 grid grid-cols-[15rem_1fr] grid-rows-2">

            <div className="flex items-center border w-[15rem] h-[80%] rounded-[.4rem]">

                <svg width="20" height="20" viewBox="0 0 20 20">
                    <path fill="white" fill-rule="evenodd" d="M13.192 14.606a7 7 0 1 1 1.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 1 1 4 9a5 5 0 0 1 10 0z" clip-rule="evenodd"></path>
                </svg>
                <input type="text" className="bg-transparent " placeholder="Buscar etiquetas de categoría" />

            </div>

            <div className="sm:flex sm:items-center sm:justify-end sm:gap-2 pr-2 hidden">
                <p className="text-[#f7f7f8] font-bold">Ordenar por</p>

                <div className="border-[1px] ">
                    <button type="button">
                        <span className="inline-flex items-center text-xs text-[#f7f7f8] p-1 f">
                            Recomendaciones para ti
                            <svg className="h-5 w-5 flex-shrink-0 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>

                </div>


            </div>


            <div className="col-start-1 col-end-3 w-full">
                <div className="flex items-center justify-normal gap-2 pr-2 sm:hidden">
                    <p className="text-[#f7f7f8] font-bold">Ordenar por</p>

                    <div className="border-[1px] ">
                        <button type="button">
                            <span className="inline-flex items-center text-xs text-[#f7f7f8] p-1 f">
                                Recomendaciones para ti
                                <svg className="h-5 w-5 flex-shrink-0 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>

                    </div>


                </div>
            </div>


        </div>
    )
}