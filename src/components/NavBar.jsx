import NavRigth from "./NavRigth"
import NavSearch from "./NavSearch"
import NavIcons from "./NavIcons"
export default function NavBar() {
    return (
        <nav className="col-start-1 col-end-3 bg-[#18181b] grid grid-cols-3">
            <NavRigth/>
            <NavSearch/>
            <NavIcons/>
        </nav>
    )
}