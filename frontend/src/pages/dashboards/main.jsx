import DashboardView from "./pages/DashoardView";
import LivraisonView from "./pages/LivraisonView";
import Parameter from "./pages/ParameterView";
import StockView from "./pages/StockView";
import TerrainManager from "./pages/TerrainManager";


export default function MainPage( {view}) {
    return (
        <main className="w-full lg:w-[calc(100%-16rem)] lg:h-[calc(100vh-7rem)] bg-white dark:bg-gray-700 rounded-lg lg:m-3 lg:ml-6 lg:fixed lg:right-0 lg:top-20 overflow-y-auto">
            { view === 'dashboard' && <DashboardView />}
            { view === 'field_management' && <TerrainManager />}
            { view === 'stock' && <StockView />}
            { view === 'delivery' && <LivraisonView />}
            { view === 'parameter' && <Parameter />}
            { view === 'logout' && <Parameter />}
        </main>
    )
}