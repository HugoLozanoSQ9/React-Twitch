export default function NavIcons() {
    //class="fill-current text-white
    const icon = [
        <svg width="20" height="20" viewBox="0 0 20 20" focusable="false" aria-hidden="true" role="presentation" className="fill-current text-white sm:hidden">
            <path fill-rule="evenodd" d="M13.192 14.606a7 7 0 1 1 1.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 1 1 4 9a5 5 0 0 1 10 0z" clip-rule="evenodd"></path>
        </svg>,
        <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current text-white" focusable="false" aria-hidden="true" role="presentation"><path fill-rule="evenodd" d="M13.798 10.456 10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z" clip-rule="evenodd"></path></svg>,
        <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current text-white" focusable="false" aria-hidden="true" role="presentation"><path fill-rule="evenodd" d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0 1 11 11H9a3.001 3.001 0 0 1-2.83-2H4v6h12V9z" clip-rule="evenodd"></path></svg>,
        <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current text-white" focusable="false" aria-hidden="true" role="presentation"><path fill-rule="evenodd" d="M7.828 13 10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2l-3 3z" clip-rule="evenodd"></path></svg>,
        <svg width="20" height="20" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" role="presentation" aria-hidden="true" focusable="false" className="fill-current text-white"><path fillRule="evenodd" clipRule="evenodd" d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z" /></svg>,
        <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current text-white" focusable="false" aria-hidden="true" role="presentation"><path d="M10.114 9.622 11 7 7.175 9.323a.382.382 0 0 0 .013.65l.698.405L7 13l3.825-2.323a.382.382 0 0 0-.012-.65l-.699-.405z"></path><path fill-rule="evenodd" d="M18 7h-2V4H2v12h14v-3h2V7zm-4-1v3h2v2h-2v3H4V6h10z" clip-rule="evenodd"></path></svg>,

    ]
    return (
        <div className="col-start-3 col-end-4 flex flex-row items-center justify-end">



            <div className=" pr-2 flex gap-4 ">

                {
                    icon.map((svg,index) => {
                        return (
                            <a key={index} href="#">
                                {svg}
                            </a>
                        )
                    })
                }

            </div>

            <div className="pr-1">
                <a href="#"><img width="20" height="20" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3f507bcb-395d-4998-8103-1c1849b71289-profile_image-70x70.png" className="rounded-full " alt="" /></a>
            </div>
        </div>
    )
}