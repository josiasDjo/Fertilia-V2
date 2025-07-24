import NavBarDash from "./navbarDash";
import SideBar from "./sidebar";
import MainPage from "./main";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
    return <>
        <div class="w-full h-screen relative flex flex-row bg-gray-200 dark:bg-skin-bg">
            {/* {toast.success("Connexion réussie !")} */}
            {/* {alert("Connexion réussie")} */}
            <NavBarDash />
            <SideBar />
            <MainPage />
        </div>
    </>
}