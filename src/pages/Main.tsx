import Timer from "../components/Timer";
import PagesWrapper from "../components/utils/PagesWrapper";
import giftBannerImage from "../images/gift-banner.png";
import sprites from "../images/sprites.svg";

interface ActivitiesBalance {
  name: string;
  balance: number;
}
interface ComingLessons {
  day: number;
  month: string;
  name: string;
  time: string;
  teacher: string;
}

type ActivitiesBalanceListType = Array<ActivitiesBalance>;
type ComingLessonsListType = Array<ComingLessons>;

const activitiesBalanceList: ActivitiesBalanceListType = [
  { name: "Ментальная Арифметика", balance: 32 },
  { name: "Программирование", balance: 0 },
  { name: "Скорочтение", balance: 4 },
];

const comingLessonsList: ComingLessonsListType = [
  {
    day: 1,
    month: "мая",
    name: "Ментальная Арифметика",
    time: "14:00-14:25",
    teacher: "Белкина Инна",
  },
  {
    day: 30,
    month: "октября",
    name: "Программирование",
    time: "11:00-11:11",
    teacher: "Животновская Оксана",
  },
  {
    day: 16,
    month: "ноября",
    name: "Скорочтение",
    time: "09:00-09:45",
    teacher: "Мин Елена",
  },
];
const Main: React.FC = () => {
  return (
    <PagesWrapper>
      <div className="flex justify-between w-full h-[15.5rem] mb-5">
        <div className="h-full py-14 px-10 flex flex-auto max-w-[32.875rem] rounded-[1.875rem] bg-7362BC relative overflow-hidden">
          <div className="flex flex-col max-w-[20rem]">
            <div className="font-circe text-white text-[2rem] leading-[2rem] mb-4">
              До 31 декабря любой курс со скидкой 20%
            </div>
            <div className="font-circe text-white text-base">
              До конца года у вас есть уникальная возможность воспользоваться
              нашей новогодней скидкой 20% на любой курс!
            </div>
          </div>
          <div className="absolute w-full max-w-[16.3125rem] h-full right-[-4.3125rem] bottom-1/2 translate-y-1/2 object-contain">
            <img
              className="w-full h-full"
              src={giftBannerImage}
              alt="Gift banner image"
            />
          </div>
        </div>
        <Timer seconds={604800} />
        <div className="h-full flex flex-col justify-between grow shrink-0 max-w-[10.125rem]">
          <a
            className="w-full h-full rounded-[1.25rem] p-3 flex flex-col items-end bg-D8ECFF mb-5"
            href=""
          >
            <span className="w-full font-circe text-[1.25rem] leading-5 text-323854">
              Домашние задания
            </span>
            <div className="rounded-xl bg-white flex justify-center items-center w-10 h-10">
              <svg
                className="fill-transparent stroke-323854"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <use xlinkHref={sprites + "#homework"} />
              </svg>
            </div>
          </a>
          <a
            className="w-full h-full rounded-[1.25rem] p-3 flex flex-col items-end bg-E8CBFF"
            href=""
          >
            <span className="w-full font-circe text-[1.25rem] leading-5 text-323854">
              Отчеты от учителей
            </span>
            <div className="rounded-xl bg-white flex justify-center items-center w-10 h-10">
              <svg
                className="fill-transparent stroke-323854"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <use xlinkHref={sprites + "#checkmark"} />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-between flex-auto">
        <div className="h-full max-w-[21.5rem] flex flex-auto flex-col justify-between items-center p-7 border-[0.0625rem] border-7362BC rounded-[1.875rem]">
          <div className="w-full font-circe text-2xl leading-6 text-323854">
            Баланс занятий
          </div>
          <ul className="flex flex-col w-full">
            {activitiesBalanceList.map((item, index) => (
              <li
                className="py-3.5 flex justify-between items-center border-b-[0.0625rem] border-EEEEFF"
                key={index}
              >
                <span className="font-circe text-base text-323854">
                  {item.name}
                </span>
                <div className="w-10 h-10 rounded-full bg-EEEEFF flex justify-center items-center font-circe text-xl text-323854">
                  {item.balance}
                </div>
              </li>
            ))}
          </ul>
          <div className="cursor-pointer w-full flex justify-center items-center p-2 rounded-[1.875rem] bg-DECFFF font-circe text-base text-323854">
            Button
          </div>
        </div>
        <div className="h-full max-w-[44.25rem] flex flex-auto flex-col justify-between items-center p-7 border-[0.0625rem] border-7362BC rounded-[1.875rem]">
          <div className="w-full font-circe text-2xl leading-6 text-323854">
            Баланс занятий
          </div>
          <ul className="flex flex-col w-full">
            {comingLessonsList.map((item, index) => (
              <li
                className="pt-3 pb-2 flex items-center border-b-[0.0625rem] border-EEEEFF"
                key={index}
              >
                <div className="w-[2.625rem] font-circe flex flex-col items-center text-[2rem] leading-8 text-323854 mr-4">
                  {item.day}
                  <span className="text-xs">{item.month}</span>
                </div>
                <div className="mr-6 font-circe text-base text-323854 flex-auto max-w-[11.25rem]">
                  {item.name}
                </div>
                <div className="flex flex-auto items-center">
                  <span className="font-circe text-xs w-full max-w-[4.375rem] text-323854 mr-1.5">
                    {item.time}
                  </span>
                  <div className="flex items-center font-circe text-323854 text-xs w-full max-w-[8.875.rem] mr-4">
                    <div className="mr-0.5">
                      <svg
                        className="fill-transparent stroke-79747F"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <use xlinkHref={sprites + "#user"} />
                      </svg>
                    </div>
                    {item.teacher}
                  </div>
                </div>
                <div className="flex">
                  <div className="cursor-pointer py-2 px-2.5 rounded-2xl font-circe text-xs text-323854 border-[0.0625rem] border-8D7FC7 mr-1">
                    Button
                  </div>
                  <div className="cursor-pointer py-2 px-2.5 rounded-2xl font-circe text-xs text-white bg-8D7FC7">
                    Button
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cursor-pointer w-full max-w-[21.5rem] flex justify-center items-center p-2 rounded-[1.875rem] bg-DECFFF font-circe text-base text-323854">
            Button
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
};

export default Main;
