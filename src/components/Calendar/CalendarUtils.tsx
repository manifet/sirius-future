import sprites from "../../images/sprites.svg";

interface CalendarHeaderProps {
  currentDate: Date;
  onNextMonth: () => void;
  onPrevMonth: () => void;
}

const CalendarUtils: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onNextMonth,
  onPrevMonth,
}) => {
  let month = currentDate.toLocaleString("default", { month: "long" });
  month = month.charAt(0).toUpperCase() + month.slice(1); // First symbol to upper case

  const year = currentDate.getFullYear();

  return (
    <div className="flex items-center mb-3">
      <div className="flex items-center mr-9">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={onPrevMonth}
        >
          <svg
            className="fill-transparent stroke-79747F"
            width="16"
            height="12"
            viewBox="0 0 16 12"
          >
            <use xlinkHref={sprites + "#arrow-left"} />
          </svg>
        </div>
        <div className="w-[6.75rem] flex justify-center items-center font-circe text-base text-323854">
          {month} {year}
        </div>
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={onNextMonth}
        >
          <svg
            className="fill-transparent stroke-79747F"
            width="16"
            height="12"
            viewBox="0 0 16 12"
          >
            <use xlinkHref={sprites + "#arrow-right"} />
          </svg>
        </div>
      </div>
      <div className="mr-4 flex justify-center items-center px-5 py-2 border-8D7FC7 border-[0.0625rem] rounded-[0.9375rem] font-circe text-xs text-323854">
        Сегодня
      </div>
      <div className="cursor-pointer flex justify-center items-center">
        <svg
          className={"fill-transparent stroke-434B74"}
          width="28"
          height="28"
          viewBox="0 0 28 28"
        >
          <use xlinkHref={sprites + "#question"} />
        </svg>
      </div>
    </div>
  );
};

export default CalendarUtils;
