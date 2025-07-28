import {motion} from 'framer-motion'
import { FadeContainer, FadeItem } from '../../../hooks/animations'

export default function TerrainManager() {
    return <>
        <motion.div 
                variants={FadeContainer}
                // initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
        id="field_management_cont" className="w-full p-4 flex-col text-white">
            <h3 className="text-left font-medium">Gestion des terrains</h3>
            <div id="champs" className="w-full flex flex-wrap">
                <div id="container_fields_action" className="w-full flex flex-row items-center relative justify-between overflow-x-auto">
                    <button type="button" id="show_adding_field" className="h-12 p-2 px-4 rounded-lg shadow-lg text-sm md:text-lg dark:bg-gray-600 green_color_text flex flex-row items-center justify-center">
                        <li id="label_add_field" className="flex mr-2">Ajouter un terrain</li> 
                        <i className="fa-solid fa-plus"></i>
                    </button>
                    <button type="button" id="filter" className="text-3xl hidden"><i className='bx bx-filter'></i></button>
                    <ul className="flex flex-row items-center justify-center content-center">
                        <ul id="show_search_bar" className="h-12 w-14 cursor-pointer items-center justify-center flex relative rounded-3xl p-2 px-4 border-2 border-solid border-black border-opacity-10 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="search" placeholder="Recherche" name="search" id="search_bar_fields" className="relative hidden ml-3 bg-white border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                        </ul>
                        <button id="fileExports" type="button" className="flex flex-row h-12 m-2 p-2 px-4 rounded-lg shadow-lg text-lg text-black items-center justify-center">
                            <li className="hidden">Exporter</li>
                            <i className="fa-solid fa-file-export"></i>
                        </button>
                    </ul>
                </div>
                <div id="modals_addFields" className="w-full h-screen z-40 backdrop-blur fixed inset-0 justify-center items-center 
                content-center hidden">
                    {/* <%- include('add_field') %> */}
                </div>
                {/* <%- include('fields') %> %> */}
            </div>
        </motion.div>
    </>
}