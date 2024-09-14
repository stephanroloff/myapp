import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
//   SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslation } from 'react-i18next';
import flagDe from '../assets/img/flagGermany.svg';
import flagEs from '../assets/img/flagSpain.svg';
import flagEn from '../assets/img/flagEngland.svg';

type languageItem = {
    value: string,
    alt: string,
    src: string,
    text: string
}

type allLanguagesItems = languageItem[];

const SelectLang = () => {
    const { i18n } = useTranslation();

    const handleValueChange = (value: string | undefined)=>{
        i18n.changeLanguage(value);
    }

    const objSelectLangItem: allLanguagesItems = [
        {
            value: 'en',
            alt: 'english-flag',
            src: flagEn,
            text: 'EN'
        },
        {
            value: 'es',
            alt: 'spanish-flag',
            src: flagEs,
            text: 'ES'
        },
        {
            value: 'de',
            alt: 'german-flag',
            src: flagDe,
            text: 'DE'
        },
    ]

    return  (
        <Select defaultValue={'en'} onValueChange={handleValueChange}>
        <SelectTrigger className="w-[160px] rounded-full">
          <SelectValue placeholder="EN" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {objSelectLangItem.map((item, index) => {
                return(
                    <SelectItem value={item.value} key={index}>
                        <div className="flex">
                        <img src={item.src} alt={item.alt} className="w-10 h-8 mr-1" />
                        <span className='blackToWhiteText pt-[2px] text-xl'>{item.text}</span>
                        </div>
                    </SelectItem>
                )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
};
  
export default SelectLang;