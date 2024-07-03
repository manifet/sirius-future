import { useState } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch } from "../models/hooks";
import { authActions } from "../models/authorization/";

import sprites from "../images/sprites.svg";
import avatarImage from "../images/avatar.jpg";

const Header: React.FC = () => {
  const [exitWindowActive, setExitWindowActive] = useState<boolean>(false);

  const location = useLocation();

  const dispatch = useAppDispatch();
  const { logOut } = authActions;

  const isMainPage = location.pathname === "/";

  const handleExit = () => {
    dispatch(logOut());
  };

  return (
    <header className="w-full flex justify-between py-3 pl-8 pr-16 bg-FDFDFF rounded-[1.125rem] shadow-header">
      <div
        className={
          "font-circe text-2xl text-323854 " + (!isMainPage && "hidden")
        }
      >
        Добро пожаловать,
        <span className="text-7362BC">{" Михаил"}</span>!
      </div>
      <div className="relative flex flex-auto justify-end">
        <div className="mr-4 cursor-pointer w-[2.625rem] h-[2.625rem] flex justify-center items-center border-[0.0625rem] rounded-full border-7362BC relative">
          <svg width="25" height="24" viewBox="0 0 25 24">
            <use xlinkHref={sprites + "#messages"} />
          </svg>
          <div className="w-4 h-4 flex justify-center items-center bg-E84849 rounded-full font-circe font-bold text-[0.625rem] leading-[0.5rem] text-white absolute right-[-0.1875rem] top-[-0.1875rem]">
            2
          </div>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => {
            setExitWindowActive(true);
          }}
        >
          <div className="w-[2.625rem] h-[2.625rem] object-contain rounded-full border-[0.0625rem] border-7362BC overflow-hidden">
            <img
              className="w-full h-full"
              src={avatarImage}
              alt="Avatar image"
            />
          </div>
          <div
            className={
              "absolute right-[-0.375rem] bottom-1/2 translate-x-full translate-y-1/2 duration-300 " +
              (exitWindowActive && "rotate-180")
            }
          >
            <svg
              className="fill-transparent stroke-7362BC"
              width="10"
              height="6"
              viewBox="0 0 10 6"
            >
              <use xlinkHref={sprites + "#arrow-down"} />
            </svg>
          </div>
        </div>
        <div
          className={
            "flex flex-col bg-white w-[15.625rem] p-[1.875rem] border-[0.0625rem] border-7362BC rounded-xl absolute right-[-1.375rem] bottom-[-0.75rem] translate-y-full " +
            (!exitWindowActive && "hidden")
          }
        >
          <span className="font-circe text-base text-323854 mb-3">
            Смена пользователя
          </span>
          <ul className="flex flex-col w-full mb-3 pb-1 border-b-[0.0625rem] border-EEEEFF">
            <li className="mb-2 bg-EEEEFF rounded-lg flex p-2">
              <div className="mr-2 w-[2.625rem] h-[2.625rem] object-contain rounded-full border-[0.0625rem] border-7362BC overflow-hidden">
                <img
                  className="w-full h-full"
                  src={avatarImage}
                  alt="Avatar image"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-circe text-base text-323854 mb-0.5">
                  Михаил
                </span>
                <span className="font-circe text-[0.625rem] leading-3 text-323854">
                  Это вы
                </span>
              </div>
            </li>
          </ul>
          <div
            className="flex justify-between p-2 items-center"
            onClick={handleExit}
          >
            <span className="cursor-pointer font-circe text-base text-008AFF">
              Выход
            </span>
            <div className="flex items-center justify-center cursor-pointer">
              <svg
                className="fill-transparent stroke-008AFF"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <use xlinkHref={sprites + "#exit"} />
              </svg>
            </div>
          </div>
          <div
            className="flex absolute right-3 top-3 cursor-pointer"
            onClick={() => {
              setExitWindowActive(false);
            }}
          >
            <svg
              className="fill-transparent stroke-7362BC"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <use xlinkHref={sprites + "#close"} />
            </svg>
          </div>
          <div className="flex absolute right-9 bottom-full">
            <svg
              className="fill-7362BC stroke-7362BC"
              width="12"
              height="9"
              viewBox="0 0 12 9"
            >
              <use xlinkHref={sprites + "#open-triangle"} />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
