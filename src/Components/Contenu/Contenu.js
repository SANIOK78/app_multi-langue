// "useContext" pour acceder aux données 
// de "context"
import React, { useContext } from 'react';
// le "context" créé
import { langContext } from "../../context/langContext";
// import "data" pour les utiliser
import data from "../../assets/data.js";

import './Contenu.css'

const Contenu = () => {

    // utilisation du "langContext"; on fait du 
    // destructuring pour récup la valeur de la variable 
    const { lang } = useContext(langContext);
    // console.log(lang)

    return (
        <div className='content'>
            <h1 className='title'>
                {data[lang].title}
            </h1>

            <p className="content-txt">
                {data[lang].txt}
            </p>
        </div>
    );
};

export default Contenu;