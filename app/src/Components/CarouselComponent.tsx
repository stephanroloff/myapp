import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Button from "./Button";

const CarouselComponent = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs rounded-lg overflow-hidden"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="p-0">
                <CardContent className="flex aspect-square items-center justify-center relative">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <img
                    className="w-full h-full object-cover"
                    src={`https://picsum.photos/600/350?v=${index}`}
                    alt="Your alt text"
                  />
                  <div className="bg-black p-4 h-[120px] opacity-85 w-full absolute bottom-0 left-0">
                      <p className="mb-2 text-white dark:text-white">TEXT {index+1}</p>
                      <Button className="opacity-100 bg-white dark:bg-white">Click me</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden"/>
      <CarouselNext className="hidden" />
    </Carousel>
  )

};
  
export default CarouselComponent;

