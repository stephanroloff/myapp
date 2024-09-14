import Card from "../components/Card";
import { useTranslation } from 'react-i18next';
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import Spacer from "../components/Spacer";

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
        <p>Paragraph</p>
        <Spacer height={50}/>
        <Spinner/>
        <Spacer height={100}/>
        
      {/* </div> */}
    </>
  )
}

export default Elements;
