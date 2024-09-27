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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageTransition from "@/components/PageTransition";



function Elements() {
  const { t } = useTranslation();

  return (  
    <>
    <PageTransition>
      <h1 className="pb-2 blackToWhiteText font-fontSecondary text-[46px]">{t(`sidebar.elements`)}</h1>

        <Card>
          <p className="mb-2">Statistics</p>
          
          <TooltipComponent delay={0} content={`Value: ${73}`}>
            <div className="w-[500px] my-2">
              <Progress value={73} />
            </div>
          </TooltipComponent>

          <TooltipComponent delay={0} content={`Value: ${23}`}>
            <div className="w-[500px] py-3">
              <Progress value={23} />
            </div>
          </TooltipComponent>

          <TooltipComponent delay={0} content={`Value: ${43}`}>
            <div className="w-[500px] py-3">
              <Progress value={43} />
            </div>
          </TooltipComponent>
          
          <TooltipComponent delay={0} content={`Value: ${93}`}>
            <div className="w-[500px] py-3">
              <Progress value={93} />
            </div>
          </TooltipComponent>

          <TooltipComponent delay={0} content={`Value: ${100}`}>
            <div className="w-[500px] py-3">
              <Progress value={100} />
            </div>
          </TooltipComponent>

          <TooltipComponent delay={0} content={`Value: ${13}`}>
            <div className="w-[500px] py-3">
              <Progress value={13} />
            </div>
          </TooltipComponent>

        </Card>
        
        <ScrollArea className="h-[500px] w-[550px] rounded-md  shadow-lg pr-4 ">
          <Timeline />
        </ScrollArea>

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
        
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="w-[550px]">
            <TabsTrigger className="w-full" value="account">Weekly</TabsTrigger>
            <TabsTrigger className="w-full" value="password">Montly</TabsTrigger>
            <TabsTrigger className="w-full" value="leer">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <ScrollArea className="h-[500px] w-[550px] rounded-md  shadow-lg pr-4 ">
              <Timeline />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="password">
            <ScrollArea className="h-[500px] w-[550px] rounded-md  shadow-lg pr-4 ">
              <Timeline />
            </ScrollArea>
          </TabsContent>
        </Tabs>

    </PageTransition> 
    </>
  )
}

export default Elements;
