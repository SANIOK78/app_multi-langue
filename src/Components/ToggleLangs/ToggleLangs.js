import React,  { useContext } from 'react';
// import des tous les ".svg"
import FrenchFlag from '../../assets/france.svg';
import SpainFlag from '../../assets/spain.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';

// import context 
import { langContext } from '../../context/langContext';

import "./ToggleLangs.css";


const ToggleLangs = () => {

    // On va extraire la function depuis le context
    const { toggleLang } = useContext(langContext);
    // console.log(toggleLang)

    return (
        <div className='container-langs'>

            <img onClick={() => toggleLang("FR")}
                src={FrenchFlag} alt="drapeau francais" 
            />

            <img onClick={() => toggleLang("ES")}
                src={SpainFlag} alt="drapeau espaniol" 
            />

            <img onClick={() => toggleLang("EN")}
                src={EnglishFlag} alt="drapeau anglais" 
            />
            
        </div>
    );
};

export default ToggleLangs;