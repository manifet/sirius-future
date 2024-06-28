const daysOfWeek: Array<string> = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вc"];

const CalendarHeader: React.FC = () => {
  return (
    <div className="flex border-C8C5CD border-b-[0.125rem]">
      {daysOfWeek.map((day, index) => (
        <div
          key={index}
          className="flex flex-auto justify-end font-circe font-normal text-end text-base text-79747F"
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarHeader;
