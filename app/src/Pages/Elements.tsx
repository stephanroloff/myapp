import Card from "../components/Card";
import { useTranslation } from 'react-i18next';
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import Spacer from "../components/Spacer";
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { Progress } from "@/components/ui/progress"
import TooltipComponent from "@/components/TooltipComponent";
import Timeline from "@/components/Timeline";
import { ScrollArea } from "@/components/ui/scroll-area"
import PageTransition from "@/components/PageTransition";
import Countdown from "@/components/Countdown";
import TabsComponent from "@/components/TabsComponent";
import {RadialProgress} from "@/components/RadialProgress";
import { TrendingUp } from "lucide-react"
import { TrendingDown } from "lucide-react"

import dataPerson from "../fetch/habits.json";
import TrackingGithubStyle from "@/components/TrackingGithubStyle";

const ComponenteA: React.FC = () => {
  // const events = JSON.parse(dataPerson.timelineEvents);
  const events = dataPerson.timelineEvents;
  return(
    <>
      <ScrollArea className="h-[500px] w-full rounded-md  shadow-lg pr-4 ">
        <Timeline events={events}/>
      </ScrollArea>
    </>
  )
}

function Elements() {
  const { t } = useTranslation();
  const targetDate = new Date('2024-12-31T23:59:59');

  return (  
    <>
    <PageTransition>
      <h1 className="pb-2 blackToWhiteText font-fontSecondary text-[46px]">{t(`sidebar.elements`)}</h1>
        <Card>
          <Countdown targetDate={targetDate}/>
        </Card>

        <TrackingGithubStyle />

        <Card>
          <RadialProgress />
          <p><TrendingUp className="text-green-500"/></p>
          <p><TrendingDown className="text-red-500"/></p>
        </Card>

        <Card>
          <p className="mb-2">Statistics</p>
          
          <TooltipComponent delay={0} content={`Value: ${73}`}>
            <div className="w-[500px] my-2">
              <Progress value={73} />
            </div>
          </TooltipComponent>

          <TooltipComponent delay={0} content={`Value: ${23}`}>
            <div className="w-[550px] py-3">
              <Progress value={23} />
            </div>
          </TooltipComponent>

          <TooltipComponent delay={0} content={`Value: ${43}`}>
            <div className="w-[550px] py-3">
              <Progress value={43} />
            </div>
          </TooltipComponent>
          
          <TooltipComponent delay={0} content={`Value: ${93}`}>
            <div className="w-[550px] py-3">
              <Progress value={93} />
            </div>
          </TooltipComponent>

          <TooltipComponent delay={0} content={`Value: ${100}`}>
            <div className="w-[550px] py-3">
              <Progress value={100} />
            </div>
          </TooltipComponent>

          <TooltipComponent delay={0} content={`Value: ${13}`}>
            <div className="w-[550px] py-3">
              <Progress value={13} />
            </div>
          </TooltipComponent>

        </Card>
        
        <Card>
          <div className="flex justify-center align-middle flex-col">
            <p className="mb-6 text-3xl text-center">Did I read today?</p>
            <div className="flex justify-center space-x-4">
              <Button>Yes</Button>
              <Button>No</Button>
            </div>
          </div>
        </Card>

        <Spacer height={50}/>
        
        <Button
        // onClick={()=>alert('Hey!')}
        onClick={() =>
          // toast.error("Event has been created", {
          toast.success("Event has been created", {
          // toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            // action: {
            //   label: "Undo",
            //   onClick: () => console.log("Undo"),
            // },
          })
        }
        >
          Click Me!
        </Button>
        <Toaster />

        <Spacer height={50}/>
        
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

        <TabsComponent 
          tabsProps={[
            { tabTriggerArray: 'weekly', TabContentArray: <ComponenteA /> },
            { tabTriggerArray: 'monthly', TabContentArray: <ComponenteA /> },
            { tabTriggerArray: 'yearly', TabContentArray: <ComponenteA /> }
          ]}
        />
        
        <Spacer height={150}/>

    </PageTransition> 
    </>
  )
}

export default Elements;
