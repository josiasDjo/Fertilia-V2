import NavBarDash from "./navbarDash";
import SideBar from "./sidebar";


export default function Dashboard() {
    return <>
        <div class="w-full h-screen relative flex flex-row bg-skin-bg">
            {/* <NavBarDash /> */}
            <SideBar />
        </div>
    </>
}