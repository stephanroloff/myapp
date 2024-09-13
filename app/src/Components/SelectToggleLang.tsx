import { useTranslation } from 'react-i18next';
import flagDe from '../assets/img/flagGermany.svg';
import flagEs from '../assets/img/flagSpain.svg';
import flagEn from '../assets/img/flagEngland.svg';
import { useState, useEffect, useRef } from 'react';

type SelectToggleLangProps = React.ComponentProps<'div'>

const SelectToggleLang = ({...rest}: SelectToggleLangProps) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('en'); // Idioma activo por defecto
  const dropdownRef = useRef<HTMLDivElement>(null); // Referencia al menú desplegable

  const toggleLang = (value: string) => {
    i18n.changeLanguage(value);
    setActiveLang(value); // Cambia el idioma activo
    setOpen(false); // Cierra el menú después de seleccionar un idioma
  };

  // Mapa de banderas según el idioma
  const getFlagByLang = (lang: string) => {
    switch (lang) {
      case 'es':
        return flagEs;
      case 'de':
        return flagDe;
      case 'en':
      default:
        return flagEn;
    }
  };

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false); // Cierra el menú si se hace clic fuera
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Efecto para actualizar el idioma inicial basado en el idioma activo en i18n
  useEffect(() => {
    setActiveLang(i18n.language || 'en'); // Asegúrate de usar el idioma activo de i18n
  }, [i18n.language]);

  return (
    <div className="relative" {...rest} ref={dropdownRef}>
      {/* Botón que despliega el menú */}
      <button 
        className="flex items-center px-3 py-1 customGraySoftTocustomGrayBg rounded-full hover:cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img src={getFlagByLang(activeLang)} alt={activeLang} className="w-8 h-5 mr-1" />
        <span className='blackToWhiteText'>{activeLang.toUpperCase()}</span>
      </button>

      {/* Menú desplegable con transición */}
     <div
        className={`absolute left-0 mt-2 transition-all duration-300 ease-in-out overflow-hidden customGraySoftTocustomGrayBg rounded shadow-xl ${
          open ? 'opacity-100 max-h-40' : 'max-h-0 opacity-0'
        }`}
        style={{ zIndex: 10 }} // Ajusta el z-index si hay elementos que cubren el menú
      >
        <ul>
          <li 
            className={`${activeLang=='en'? 'bg-gray-300 dark:bg-gray-500': ''} flex items-center px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer rounded-lg`}
            onClick={() => toggleLang('en')}
          >
            <img src={flagEn} alt="English" className="w-8 h-5 mr-1" /> 
            <span className='blackToWhiteText'>EN</span>
          </li>
          <li 
            className={`${activeLang=='es'? 'bg-gray-300 dark:bg-gray-500': ''} flex items-center px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer rounded-lg`}
            onClick={() => toggleLang('es')}
          >
            <img src={flagEs} alt="Español" className="w-8 h-5 mr-2" />
            <span className='blackToWhiteText'>ES</span>
          </li>
          <li 
            className={`${activeLang=='de'? 'bg-gray-300 dark:bg-gray-500': ''} flex items-center px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer rounded-lg`}
            onClick={() => toggleLang('de')}
          >
            <img src={flagDe} alt="Deutsch" className="w-8 h-5 mr-2" />
            <span className='blackToWhiteText'>DE</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectToggleLang;

 