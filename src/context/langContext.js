// Le CONTEXT
import React, { createContext, useState } from 'react';
// Création du Context
export const langContext = createContext();

/**COMMENT DETECTER LA LANGUE  DU NAVIGATEUR
 pour afficher directement la bonne langue */
const supportedLangs = [ 'EN', 'FR', 'ES'];

// Chaque navigateur nous donne acces a sa langue 
let browserLang = navigator.language.slice(0, 2).toLocaleUpperCase();
console.log(browserLang);

// Si on est sur une langue qui n'est pas dans notre tableau
if(supportedLangs.indexOf(browserLang) === -1 ) {
    console.log("Not supported");
    // On affiche le contenu en "EN" => langue internationnale
    browserLang = "EN";
}


const ContextProvider = props => {

    // on démarre en 'EN'
    const [lang, setLang] = useState(browserLang);
    // console.log(lang);

    const toggleLang = (changeLang) => {
        setLang(changeLang)
    }

    return (
       
        <langContext.Provider value={{ lang, toggleLang }} >
            {/* tous les composents  */}
            {props.children}
        </langContext.Provider>
    )
}
export default ContextProvider;