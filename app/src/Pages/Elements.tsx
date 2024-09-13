import Card from "../Components/Card";
import { useTranslation } from 'react-i18next';
import Spinner from "../Components/Spinner";
import Button from "../Components/Button";
import Spacer from "../Components/Spacer";

function Elements() {
  const { t } = useTranslation();

  return (  
    <>
      <h1 className="pb-2 blackToWhiteText font-fontSecondary text-[46px]">{t(`sidebar.elements`)}</h1>
      {/* <div className="flex"> */}
        <Card />
        <Button>Click Me!</Button>
        <h1>h1 Element</h1>
        <h2>h2 Element</h2>
        <h3>h3 Element</h3>
        <h4>h4 Element</h4>
        <h5>h5 Element</h5>
        <h6>h6 Element</h6>
        <Spacer/>
        <Spinner/>
        
      {/* </div> */}
    </>
  )
}

export default Elements;
