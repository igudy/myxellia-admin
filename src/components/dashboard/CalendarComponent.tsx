"use client";
import { useState } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";

const CalendarComponent: React.FC = () => {
  const [selected, setSelected] = useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <>
      <DayPicker
        showOutsideDays
        captionLayout="dropdown-buttons"
        fromYear={2015}
        toYear={2025}
        footer={footer}
      />
    </>
  );
};

export default CalendarComponent;
