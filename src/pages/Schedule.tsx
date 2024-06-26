import PagesWrapper from "../components/utils/PagesWrapper";
import Calendar from "../components/Calendar";
import sprites from "../images/sprites.svg";

const Schedule: React.FC = () => {
  return (
    <PagesWrapper>
      <div className="flex justify-between items-center mb-[1.875rem]">
        <div className="w-full max-w-[15.8125rem] flex justify-between items-center rounded-lg py-2.5 px-3 border-ECECEC border-[0.0625rem] text-79747F text-xs font-circe ">
          Выбрать предмет
          <div className="flex justify-center items-center">
            <svg
              className="fill-transparent stroke-79747F"
              width="10"
              height="6"
              viewBox="0 0 10 6"
            >
              <use xlinkHref={sprites + "#arrow-down"} />
            </svg>
          </div>
        </div>
        <div className="cursor-pointer flex justify-center items-center bg-DECFFF rounded-[1.875rem] w-full max-w-[21.5rem] p-2.5 font-circe text-base text-323854">
          Изменить расписание
        </div>
      </div>
      <Calendar />
    </PagesWrapper>
  );
};
export default Schedule;
