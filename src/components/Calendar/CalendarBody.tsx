import CalendarCell from "./CalendarCell";

interface CalendarBodyProps {
  currentDate: Date;
}

const CalendarBody: React.FC<CalendarBodyProps> = ({ currentDate }) => {
  const tableRows = 5;
  const tableColums = 7;
  const totalDays = tableRows * tableColums;
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const firstDayOfCurrentMonth = new Date(year, month, 1).getDay();

  const calendarDays: JSX.Element[] = [];

  // Previous month days
  for (
    let i = daysInPrevMonth - firstDayOfCurrentMonth + 2; // +2 Because we don't need today's day to fill in the days of the previous month + we also don't need an extra day when calculating the difference daysInPrevMonth - firstDayOfCurrentMonth.
    i <= daysInPrevMonth;
    i++
  ) {
    calendarDays.push(<CalendarCell key={`prevDay-${i}`} day={i} />);
  }
  // Current month days
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    calendarDays.push(<CalendarCell key={`currentDay-${i}`} day={i} />);
  }
  // Next month days
  for (let i = 1; calendarDays.length < totalDays; i++) {
    calendarDays.push(<CalendarCell key={`nextDay-${i}`} day={i} />);
  }

  return (
    // This construction guarantees the exact size of the table even if calendarDays.length > tableRows * tableColums.
    <div className="flex flex-auto flex-col border-ECECEC border-l-[0.0625rem]">
      {Array.from({ length: tableRows }, (_, weekIndex) => (
        <div
          className="flex flex-auto border-ECECEC border-b-[0.0625rem]"
          key={`row-${weekIndex}`}
        >
          {Array.from(
            { length: tableColums },
            (_, dayIndex) =>
              calendarDays[weekIndex * tableColums + dayIndex] || (
                <div>Empty</div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;
