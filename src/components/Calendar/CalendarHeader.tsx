const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вc"];

const CalendarHeader: React.FC = () => {
  return (
    <thead className="flex flex-auto border-C8C5CD border-b-[0.0625rem]">
      <tr className="flex flex-auto">
        {daysOfWeek.map((day, index) => (
          <th
            key={index}
            className="flex flex-auto justify-end font-circe text-base text-79747F"
          >
            {day}
          </th>
        ))}
      </tr> 
    </thead>
  );
};

export default CalendarHeader;
