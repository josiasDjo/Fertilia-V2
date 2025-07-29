

export function AddField({close}) {
    return <>
        <div id="show_addField" className="bg-gray-200 dark:bg-gray-900 relative w-11/12 lg:w-96 p-4 items-center justify-center flex-col rounded-lg shadow-lg z-50">
            <button type="button" onClick={close} className="absolute top-2 left-2 text-2xl text-skin-text" id="hide_adding_field"><i className="fa-solid fa-rectangle-xmark" id="closeConnexion"></i></button>
            <h3 className="font-medium m-2 text-center">Ajouter un terrain</h3>
            <form id="form_add_field" className="flex flex-col">
                <input 
                type="text" 
                name="nom" 
                id="nom" 
                placeholder="Nom du champ" 
                className="dark:bg-gray-800 rounded-lg p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                
                <input 
                type="text" 
                name="type_culture" 
                id="type_culture" 
                placeholder="Type de culture" 
                className="dark:bg-gray-800 rounded-lg p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                
                <input 
                type="number" 
                name="surface" 
                id="surface" 
                placeholder="Surface" 
                className="dark:bg-gray-800 rounded-lg p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                
                <select name="etat" id="etat" className="dark:bg-gray-800 rounded-lg p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
                    <option value="Ensemencer">Ensemencer</option>
                    <option value="Croissance">Croissance</option>
                    <option value="Recolte">Recolte</option>
                </select>
                {/* <!-- <h4 class="font-medium">Localisation</h4> --> */}
                <button type="button" id="locate_myField" className="text-green-700 rounded-lg my-5 p-2 border-2 border-solid border-green-700 border-opacity-30">
                    <i className="fa-solid fa-map-location-dot"></i>
                    <span>Localiser mon champs</span>
                </button>
                <ul className="hidden">
                    <input type="number" name="longitude" id="longitude" className="dark:bg-gray-800 rounded-lg p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                    <input type="number" name="latitude" id="latitude" className="dark:bg-gray-800 rounded-lg p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                </ul>    
                <button className="backgroud_btn_h dark:bg-skin-accent text-white rounded-lg p-2 border-2 border-solid border-yellow-500 dark:border-green-500 border-opacity-30" type="submit">Enregistrer</button>
                <ul className="flex flex-col w-full text-center">
                    <p className="text-sm" id="message_error"></p>
                </ul>
            </form>
        </div>
    </>
}