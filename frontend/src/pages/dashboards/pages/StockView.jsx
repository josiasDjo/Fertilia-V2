
export default function StockView() {
    return <>
        <div id="stock_management" className="w-full p-5 lg:p-10 flex-col">
            <h3 className="text-left font-medium list-none flex flex-row">
                <li className="text-md mr-2"><i className="fa-solid fa-warehouse"></i></li>
                Mon stock</h3>
            <div className="w-full flex flex-row">
                <button id="addMore_Product" type="button" className="h-12 m-2 p-2 px-4 rounded-lg shadow-lg text-lg green_color_text">Ajouter en stock <i className="fa-solid fa-arrow-right"></i></button>
                <button type="button" className="hidden h-12 m-2 p-2 px-4 rounded-lg shadow-lg text-lg text-red-500">Sortir du stock <i className="fa-solid fa-arrow-left"></i></button>
            </div>

            <div id="modals_addProduct" className="w-full h-screen z-40 backdrop-blur fixed inset-0 justify-center items-center 
            content-center hidden">
                {/* <%- include('add_products') %>
                <%- include('modify_product') %>
                <%- include('substrate_products') %> */}
            </div>
            <div id="container_graphic" className="w-full flex flex-col">
                <div id="other_graph" className="w-full flex flex-row">
                    <div id="" className="w-48 h-48 lg:w-96 lg:h-64 bg-gray-200 m-3 rounded-lg">

                    </div>
                    <div id="" className="w-48 h-48 lg:w-96 lg:h-64 bg-gray-200 m-3 rounded-lg">

                    </div>
                    <div id="" className="w-48 h-48 lg:w-96 lg:h-64 bg-gray-200 m-3 rounded-lg">

                    </div>
                </div>
                <div className="w-full relative items-center justify-center flex flex-col lg:flex-row">
                    <div id="graphic_stock" className="w-full relative">
                        <img src="/images/graphic_stock.jpeg" className="w-full h-auto object-contain" alt="graphic_stock" />
                    </div>
                    <div id="stock_level" className="green_color_bg p-3 rounded-lg text-white text-left flex items-left lg:items-center">
                        <p className="text-lg">Stock est bon</p>
                    </div>
                </div>
            </div>
            
            <div id="history_stock" className="w-full items-left relative my-5">
                <button id="show_or_hidden_history_stock" className="flex flex-row justify-center">
                    Afficher l'historique des entrées et sorties
                    <li id="show_history_stock" className="flex m-2"><i className="fa-solid fa-chevron-down"></i></li>
                    <li id="hidden_history_stock" className="hidden m-2"><i className="fa-solid fa-chevron-up"></i></li>
                </button>

                <div id="history_container" className="hidden bg-gray-200 w-full relative">
                    {/* <%- include('history_ES') %> */}
                </div>
            </div>

            {/* <%- include('gestion_produits') %> */}
        </div>
    </>
}