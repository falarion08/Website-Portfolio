import logo from "../assets/logo.svg"
import NavBarText from "./NavbarText"

export default function TopNavigationBar(props: any) {
    return (
        <div className="w-full py-[1%] px-[6%]">
            <div className="flex flex-row justify-between">

                <div className="">
                    <img src={logo} alt="my logo" className="size-16 min-w-16 min-h-16"/>
                </div>

                <div className="flex-1 flex flex-row items-center justify-end">
                    <NavBarText sectionTitle = "About"/>
                    <NavBarText sectionTitle = "Experience"/>
                    <NavBarText sectionTitle = "Projects"/>
                    <NavBarText sectionTitle = "Skills" />

                </div>
            </div>

        </div>
    )
}