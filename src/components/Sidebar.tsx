import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoImageWithText from "../images/logo-text.svg";
import giftImage from "../images/gift.svg";
import sprites from "../images/sprites.svg";

interface NavListItem {
  svgName: string;
  name: string;
  navPath: string;
}

type NavListType = NavListItem[];

const navList: NavListType = [
  { svgName: "home", name: "Главная", navPath: "/main" },
  { svgName: "calendar", name: "Расписание", navPath: "/schedule" },
  { svgName: "wallet", name: "Оплата", navPath: "/payment" },
  { svgName: "reward", name: "Достижения", navPath: "/achievements" },
  { svgName: "puzzle", name: "Тренажеры", navPath: "/trainers" },
  { svgName: "folder", name: "Библиотека", navPath: "/library" },
  { svgName: "headphones", name: "Проверка связи", navPath: "/communication" },
  { svgName: "settings", name: "Настройки", navPath: "/settings" },
  { svgName: "question", name: "Вопросы", navPath: "/questions" },
];
const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<NavListItem["navPath"]>(
    location.pathname
  );
  const navigate = useNavigate();
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <aside className="h-full mt-6 grow shrink-0 w-full flex flex-col justify-between max-w-[14.75rem] pt-11 px-5 pb-6 rounded-[1.875rem] bg-EEEEFF">
      <div className="w-full h-[3.625rem] flex justify-center items-center object-contain mb-10">
        <img
          className="w-full h-full"
          src={logoImageWithText}
          alt="Logo with text"
        />
      </div>
      <nav className="w-[13.5rem] ml-[-1.25rem] mb-[3.125rem]">
        <ul className="w-full">
          {navList.map((item, index) => {
            const isActiveTab: boolean = item.navPath === activeTab;
            return (
              <li
                className={
                  "group pl-12 py-1.5 cursor-pointer flex items-center rounded-br-[1.875rem] rounded-tr-[1.875rem] hover:bg-8D7FC7 " +
                  (isActiveTab ? "bg-8D7FC7" : "bg-none")
                }
                key={index}
                onClick={() => navigate(item.navPath)}
              >
                <div className="flex w-7 h-7 justify-center items-center">
                  <svg
                    className={
                      "fill-transparent group-hover:stroke-white " +
                      (isActiveTab ? "stroke-white" : "stroke-434B74")
                    }
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                  >
                    <use xlinkHref={sprites + `#${item.svgName}`} />
                  </svg>
                </div>
                <span
                  className={
                    "font-circe text-base ml-2 group-hover:text-white " +
                    (isActiveTab ? "text-white" : "text-434B74")
                  }
                >
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="w-full pt-4 pl-4 pr-8 pb-2.5 rounded-2xl bg-FDFDFF relative overflow-hidden">
        <span className="font-circe text-base text-323854 mb-1 leading-5">
          Учитесь бесплатно
        </span>
        <p className="text-[0.625rem] leading-3 mb-2.5">
          Приводите друзей с детьми заниматься в Sirius Future и получайте
          подарки!
        </p>
        <a
          className="w-fit bg-D8ECFF rounded-2xl py-2 px-4 flex items-center justify-center font-circe text-sm text-323854 leading-4"
          href="#"
        >
          Узнать
        </a>
        <div className="w-[5.125rem] h-[6.125rem] object-contain flex justify-center items-center absolute bottom-[-2rem] right-[-0.5rem]">
          <img className="w-full h-full" src={giftImage} alt="Gift image" />
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
