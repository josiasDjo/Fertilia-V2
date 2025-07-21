import NavBarDash from "./navbarDash";
import SideBar from "./sidebar";
import MainPage from "./main";

export default function Dashboard() {
    return <>
        <div class="w-full h-screen relative flex flex-row bg-gray-200 dark:bg-skin-bg">
            <NavBarDash />
            <SideBar />
            <MainPage />
        </div>
    </>
}