import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

// Definir el tipo de los props, asegurando que `value` sea un número o undefined
interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value = 0, ...props }, ref) => {
  // El estado inicializado como un número
  const [animatedValue, setAnimatedValue] = React.useState<number>(0);

  // Animación gradual para la barra de progreso
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimatedValue(value || 0);
    }, 100); // Tiempo de retardo para iniciar la animación

    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-customGraySoft dark:bg-customGray",
        className
      )}
      {...props}
    >
      {/* Fondo de degradado */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-themeColor to-themeColorSoft" />
      
      {/* Barra animada */}
      <div 
        className="absolute top-0 bottom-0 right-0 bg-customGraySoft dark:bg-customGray transition-all duration-1000 ease-out"
        style={{
          width: `${100 - animatedValue}%`,
          transition: 'width 0.5s ease-out', // Duración y tipo de la animación
        }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
