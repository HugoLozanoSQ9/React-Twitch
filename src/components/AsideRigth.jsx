import AsideRigthTopSections from "./AsideRigthTopSections"
import ChannelsTransform from "./ChannelsTransform"
import AsideRigthMidSections from "./AsideRigthMidSections"
export default function AsideRigth() {

    const myChannel = [
        {
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/2e6fcb05-0eb4-4c31-a391-c7493dbb0b97-profile_image-70x70.png",
            title: "Anglemar",
            status: true,
            Type: "Solo chateando"
        },
        {
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/d264f3ae-802b-4af7-8d62-5e458d394ccd-profile_image-70x70.png",
            title: "VeteALAVersh_dk",
            status: true,
            Type: "Arte"
        },
        {
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/commanderroot-profile_image-dd5d1687fe9ed868-70x70.png",
            title: "CommanderRoot",
            status: true,
            Type: "Path of Exile"
        },
        {
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/50f9421f-f454-4337-bd3f-48771ff03cfb-profile_image-70x70.jpeg",
            title: "Yeonilevra",
            status: false,
            Type: "null"
        },
        {
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/d666490e-caab-48df-8581-26f78eff3bff-profile_image-70x70.png",
            title: "SEMUCVER",
            status: false,
            Type: "null"
        },
        {
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/elfedelobo-profile_image-1d74acb6f0797ea1-70x70.png",
            title: "El FEDELOBO",
            status: false,
            Type: "null"
        }
    ]
    const recomendados = [
        {
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/d1714f39-3b66-4801-b3f2-a29b93c2cbff-profile_image-70x70.png",
            title: "El pan tostao",
            status: true,
            Type: "Rust"
        },
        {
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/ab76403b-c87c-4439-b46b-b6cd0c07a663-profile_image-70x70.png",
            title: "El puñetas",
            status: true,
            Type: "Call of Duty"
        },
        {
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/f1f5921c-bf2e-4232-9610-b4e2fdd8a64d-profile_image-70x70.png",
            title: "El trapesio XD",
            status: true,
            Type: "Valorant"
        },
        {
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/d4885242-febf-4a11-a42a-a0ad52474ee2-profile_image-70x70.png",
            title: "Porta XD supongo",
            status: true,
            Type: "Rapeando"
        }
    ]
    return (

        <aside className="bg-[#1f1f23] flex flex-col gap-3 items-center pt-1 lg:items-start lg:pl-2" >

            <AsideRigthTopSections />

            <a href="#" className="lg:hidden">
                <svg viewBox="0 0 20 20" width="20" height="20" className="fill-current text-white ">
                    <path fill="white" fill-rule="evenodd" d="M9.171 4.171A4 4 0 0 0 6.343 3H6a4 4 0 0 0-4 4v.343a4 4 0 0 0 1.172 2.829L10 17l6.828-6.828A4 4 0 0 0 18 7.343V7a4 4 0 0 0-4-4h-.343a4 4 0 0 0-2.829 1.172L10 5l-.829-.829zm.829 10 5.414-5.414A2 2 0 0 0 16 7.343V7a2 2 0 0 0-2-2h-.343a2 2 0 0 0-1.414.586L10 7.828 7.757 5.586A2 2 0 0 0 6.343 5H6a2 2 0 0 0-2 2v.343a2 2 0 0 0 .586 1.414L10 14.172z" clip-rule="evenodd"></path>
                </svg>
            </a>

            {myChannel.map((channel) => {
                return <ChannelsTransform
                    img={channel.image}
                    title={channel.title}
                    status={channel.status}
                    type={channel.Type}
                />
            })
            }
            
            <AsideRigthMidSections />

            {
                recomendados.map((channel) => {
                    return <ChannelsTransform
                        img={channel.image}
                        title={channel.title}
                        status={channel.status}
                        type={channel.Type}
                    />
                })
            }




        </aside>

    )
}