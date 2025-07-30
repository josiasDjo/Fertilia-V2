import { useEffect, useState } from "react"

export default function Fields () {
    const token = localStorage.getItem("token")
    const fields = [1,2,3]
    const [openIndex, setOpenIndex] = useState(null);

    const handleOpenDetailField = (index) => {
        setOpenIndex(prev => prev === index ? null : index);
    }

    fetch("/api/champs/terrain/getAll", {
        method: "GET", 
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log("Data : ", data)
        })
        .catch((error) => {
            console.log("Erreur lors de la recup des terrains : ", error)
        })
    return <>
        <div id="container_fields" className="w-full mx-2 flex flex-wrap relative">
                {fields.map((index, key) => {
                    return (
                        <div key={key} className="field_card w-full h-80 md:w-64 lg:h-72 lg:w-72 mx-2 my-10 lg:m-3 bg-gray-200 dark:bg-gray-600 shadow-lg rounded-lg flex flex-col relative">
                            <div className="backdrop-blur bg-white text-gray-900 h-10 w-10 absolute top-2 right-2 z-30 rounded-lg py-2 text-center justify-center items-center flex">
                                <button type="button" id="show_details" onClick={() => handleOpenDetailField(index)} className="btn_show_option h-full w-full text-xl text-center justify-center items-center flex"><i className="fa-solid fa-ellipsis-vertical"></i></button>
                            </div>
                            <div id="show_details_div" className={`${openIndex === index ? 'flex' : 'hidden'} show_details_div w-72 flex-col items-start p-5 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-600 absolute top-16 right-2 z-30`}>
                                <button className="flex flex-row text-md my-2 mx-2">
                                    <p><i className="fa-solid fa-arrow-up-right-from-square"></i></p>
                                    <p className="px-3">Détails sur le terrain</p>
                                </button>
                                <button className="flex flex-row text-md my-2 mx-2">
                                    <p className="text-3xl"><i class='bx bx-edit-alt'></i></p>
                                    <p className="px-3">Modifier le terrain</p>
                                </button>
                                <button className="flex flex-row text-md my-2 mx-2 text-red-500">
                                    <p className="text-3xl"><i className='bx bxs-trash'></i></p>
                                    <p className="px-3">Supprimer le terrain</p>
                                </button>
                            </div>
                            <div className="bg-gray-200 dark:bg-gray-600 w-full h-4/12 my-2 py-2 relative z-10">
                                <div className="w-full flex flex-row relative items-center justify-center">
                                    <h2 className="font-bold text-xl">Riz</h2>
                                    <p className="italic ml-3">Type : <span id="cultureType" className="font-medium not-italic">Graine</span></p>
                                </div>
                                <div>

                                </div>
                                <p className="text-center">Superficie : champ.surface hectare</p>
                            </div>
                
                            <div id="graphic" className="w-full h-7/12 relative justify-center items-center flex">
                                <div className="w-16 items-center justify-center flex flex-col m-2">
                                    <div className="h-14 w-14 rounded-full border-4 border-solid border-gray-800 dark:border-white text-center items-center justify-center flex"><p class="text-sm font-bold">100</p></div>
                                    <p className="font-medium text-black dark:text-skin-accentSec text-sm">Température</p>
                                </div>
                                <div className="w-16 items-center justify-center flex flex-col m-2">
                                    <div className="h-14 w-14 rounded-full border-4 border-solid border-gray-800 dark:border-white text-center items-center justify-center flex"><p class="text-sm font-bold">100</p></div>
                                    <p className="font-medium text-black dark:text-skin-accentSec text-sm">Humidité</p>
                                </div>                        
                                <div className="w-16 items-center justify-center flex flex-col m-2">
                                    <div className="h-14 w-14 rounded-full border-4 border-solid border-gray-800 dark:border-white text-center items-center justify-center flex"><p class="text-sm font-bold">100</p></div>
                                    <p className="font-medium text-black dark:text-skin-accentSec text-sm">pH du sol</p>
                                </div>
                            </div>
                            <div className="w-full items-center justify-center flex">
                                <ul className="flex flex-row"><p className="text-sm">Capteurs Connectés : <span className="green_color_text font-bold">10</span> / Hors ligne : <span class="font-bold text-red-500">2</span></p></ul>
                            </div>
                            <p className="text-sm italic text-left m-3">Dernière mise à jour : <span className="lastUpdateDate"></span></p>
                            <div class="w-full px-3">
                                <button id="" className="bg-skin-accent w-full text-white rounded-xl p-2 border-opacity-30">Statut global : <span id="etatchamps" className="font-medium">BON</span></button>
                            </div>
                        </div>
                    )
                })}

            <button type="hidden" id="show_details" class="hidden"></button>
        </div>

    </>
}