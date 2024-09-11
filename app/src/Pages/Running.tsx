import Card from "../Components/Card";
import { useTranslation } from 'react-i18next';

function Running() {
  const { t } = useTranslation();

  return (  
    <>
      <h1 className="pb-2 blackToWhiteText font-fontSecondary text-[46px]">{t(`sidebar.running`)}</h1>
      <div className="flex">
        <Card />
        <Card />
      </div>
    </>
  )
}

export default Running;
