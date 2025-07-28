import NavBarDash from "./navbarDash";
import SideBar from "./sidebar";
import MainPage from "./main";
import { useState } from "react";
import DashboardView from "./pages/DashoardView";
import TerrainManager from "./pages/TerrainManager";
import StockView from "./pages/StockView";
import LivraisonView from "./pages/LivraisonView";
import Parameter from "./pages/ParameterView";
import Logout from "./pages/logout";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
    const [currentView, setCurrentView] = useState('dashboard')

    const renderView = () => {
        switch(currentView) {
            case "dashboard":
                return <DashboardView />
            case "terrain":
                return <TerrainManager />
            case "stock":
                return <StockView />
            case "livraison":
                return <LivraisonView />
            case "parametre":
                return <Parameter />
            case "deconnexion":
                return <Logout />
            default:
                return <DashboardView />
        }
    }
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