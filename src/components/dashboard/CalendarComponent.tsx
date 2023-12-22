"use client";
import { useState } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";

/* Update the css variable */
const css = `

  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: blue;
  }

  .DayPicker {
    background-color: black;
    color: white;
  }
`;

const CalendarComponent: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<Date[]>();

  return (
    <>
      <style>{css}</style>
      <DayPicker
        selected={selectedDay}
        onSelect={setSelectedDay}
        modifiersClassNames={{
          selected: "my-selected",
          today: "my-today",
        }}
        modifiersStyles={{
          disabled: { fontSize: "75%" },
        }}
      />
    </>
  );
};

export default CalendarComponent;
