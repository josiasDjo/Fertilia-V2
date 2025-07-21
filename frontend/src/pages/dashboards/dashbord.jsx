import NavBarDash from "./navbarDash";
import SideBar from "./sidebar";
import MainPage from "./main";

export default function Dashboard() {
    return <>
        <div class="w-full h-screen relative flex flex-row bg-skin-bg">
            <NavBarDash />
            <SideBar />
            <MainPage />
        </div>
    </>
}