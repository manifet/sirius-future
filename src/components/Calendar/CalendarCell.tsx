interface CalendarCellProps {
  day: number;
}

const CalendarCell: React.FC<CalendarCellProps> = ({ day }) => {
  return (
    <td className="flex flex-col flex-auto basis-[153px] h-[6.3125rem] p-1 border-ECECEC border-r-[0.0625rem] border-b-[0.0625rem]">
      <div className="w-full flex justify-end font-circe text-xs text-323854">{day}</div>
    </td>
  );
};
export default CalendarCell;
