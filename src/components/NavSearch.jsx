export default function NavSearch() {
    return (
        <div className="col-start-2 col-end-3 flex flex-row items-center w-[90%] lg:w-full ">
            <div className="w-full flex  h-[60%] items-end flex-col justify-center sm:flex-row sm:items-stretch">
                <input className="w-[90%]  bg-transparent border border-[#282828] rounded-sm hidden sm:block" placeholder={`  Buscar`} type="text" />

                <div className="sm:w-[10%] sm:flex sm:justify-center sm:items-center sm:bg-[rgba(83,83,95,0.38)] sm:rounded-sm hidden  ">
                    <a href="#"> <svg width="20" height="20" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" data-a-selector="tw-core-button-icon" class="fill-current text-white">
                        <g>
                            <path fill-rule="evenodd" d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z" clip-rule="evenodd"></path>
                        </g>
                    </svg>
                    </a>
                </div>

            </div>
        </div>
    )
}