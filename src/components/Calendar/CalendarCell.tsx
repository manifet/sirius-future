interface CalendarCellProps {
  day: number;
}

const CalendarCell: React.FC<CalendarCellProps> = ({ day }) => {
  return (
    <div className="flex flex-auto w-full flex-col p-1 border-r-[0.0625rem]">
      <span className="w-full text-end font-circe text-xs text-323854">{day}</span>
    </div>
  );
};
export default CalendarCell;
