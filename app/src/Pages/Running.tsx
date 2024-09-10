import Card from "../Components/Card";
import { useTranslation } from 'react-i18next';

function Running() {
  const { t } = useTranslation();

  return (  
    <>
      <h1 className="pb-2 blackToWhiteText">{t(`sidebar.running`)}</h1>
      <Card />
      <Card />
      <div className="h-2 w-full bg-green-400 max-[800px]:bg-red-400 max-[500px]:bg-blue-400"></div>
      <div className="h-2 w-[200px] bg-green-500 max-iphone:bg-yellow-400"></div>
      <div className="h-2 w-[300px] bg-green-600"></div>
    </>
  )
}

export default Running;
