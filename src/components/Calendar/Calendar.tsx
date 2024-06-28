import { useState, useCallback } from "react";

import CalendarUtils from "./CalendarUtils";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const nextMonth = useCallback(() => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  }, [currentDate]);

  const prevMonth = useCallback(() => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  }, [currentDate]);

  return (
    <div className="flex flex-auto flex-col">
      <CalendarUtils
        currentDate={currentDate}
        onNextMonth={nextMonth}
        onPrevMonth={prevMonth}
      />
      <div className="flex flex-auto flex-col">
        <CalendarHeader />
        <CalendarBody currentDate={currentDate} />
      </div>
    </div>
  );
};

export default Calendar;
