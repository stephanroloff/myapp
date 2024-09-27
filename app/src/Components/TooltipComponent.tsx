import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type TooltipProps = {
    children: React.ReactNode;
    content: string;
    delay: number;
}

const TooltipComponent = ({children, content, delay}:TooltipProps) => {

    return  (
        <TooltipProvider delayDuration={delay}>
            <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>
                <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
  
export default TooltipComponent;
