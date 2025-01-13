import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { useEffect } from "react";

export function CalenderComponent() {
  const [date, setDate] = React.useState<Date[] | undefined>();

  useEffect(() => {
    setDate([
      new Date(2025, 0, 3),
      new Date(2025, 0, 4),
      new Date(2025, 0, 7),
    ]);
  }, [])

  return (
    <Calendar
      mode="multiple"
      selected={date}
      weekStartsOn={1}
      defaultMonth={new Date(2025, 0)}
      disableNavigation
      // onSelect={setDate}
      className="bg-white dark:bg-cardGray border border-customGraySoft dark:border-customGray shadow-lg rounded-md pt-2"
    />
  )
}
