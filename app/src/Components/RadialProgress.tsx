import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useEffect, useState } from "react";

type RadialProgressProps = {
  startValue: Date | number,
  currentValue?: Date | number,
  endValue: Date | number;
}

export const description = "A radial chart with text and gradient";

const chartData = [
  { browser: "safari", visitors: 200, fill: "url(#colorGradient)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function RadialProgress({startValue, currentValue, endValue}:RadialProgressProps ) {
  const [timerCurrentValue, settimerCurrentValue] = useState<number>(0);
  const [percentageValue, setPercentageValue] = useState<number>(0);
  let newCurrentValue = 0;

  useEffect(() => {

    const interval = setInterval(() => {

      if (typeof currentValue === "number" && typeof endValue === "number"){
        newCurrentValue = (currentValue*360)/endValue
        settimerCurrentValue(newCurrentValue);

        const percentage = (currentValue/endValue)*100
        setPercentageValue(percentage);
    
      } else if(startValue instanceof Date && endValue instanceof Date){
        const currentDate = new Date();
        const currentDateNumber = currentDate.getTime() - startValue.getTime();
        const endDateNumber = endValue.getTime() - startValue.getTime();
  
        newCurrentValue = (currentDateNumber*360)/(endDateNumber)
        
        const percentage = (currentDateNumber/endDateNumber)*100
        setPercentageValue(Math.round(percentage));

        settimerCurrentValue(newCurrentValue);
      } 
    }, 1000);
  
    // Cleanup the interval on component unmount or dependency change
    return () => clearInterval(interval);
    
  }, [timerCurrentValue]); // Add dependencies to avoid stale values
  

  return (
    <>
      <ChartContainer config={chartConfig} className="mx-auto max-h-[200px]">
        <RadialBarChart
          data={chartData}
          startAngle={(0)*(-1)+90}
          endAngle={(timerCurrentValue)*(-1)+90}
          innerRadius={80}
          outerRadius={110}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--theme-color-light)" />
              <stop offset="100%" stopColor="var(--theme-color)" />
            </linearGradient>
          </defs>
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-customGraySoft first:dark:fill-customGray last:fill-white last:dark:fill-cardGray"
            polarRadius={[86, 74]}
          />
          <RadialBar dataKey="visitors" background cornerRadius={10} animationDuration={700} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        dy="4"
                        className="fill-foreground text-4xl font-bold"
                      >
                        {percentageValue}
                        <tspan
                        dx="2"
                        className="text-2xl fill-foreground"
                        >
                        %
                        </tspan>
                      </tspan>
                      {/* <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        accomplished
                      </tspan> */}
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </>
  );
}
