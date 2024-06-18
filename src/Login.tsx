import { useNavigate } from "react-router-dom";
import Logo from "./images/logo.svg";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/main");
  };
  return (
    <>
      <form
        className="flex w-full max-w-[21.25rem] flex-col items-center"
        action=""
        method="POST"
      >
        <div className="w-20 h-20 object-contain mb-8">
          <img src={Logo} alt="logo" className="w-full h-full" />
        </div>
        <h1 className="mb-4 text-[2.5rem] text-323854 leading-9 font-circe">
          Вход в Sirius Future
        </h1>
        <div className="mb-4 w-full flex flex-col">
          <input
            className="mb-3 outline-none border-[0.0625rem] border-ECECEC text-323854 rounded-lg py-[0.625rem] px-3 font-circe text-xs"
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            className="outline-none border-[0.0625rem] border-ECECEC text-323854 rounded-lg py-[0.625rem] px-3 font-circe text-xs"
            type="password"
            placeholder="Пароль"
            required
          />
        </div>
        <div className="w-full mb-4">
          <input type="checkbox" id="remember" className="hidden peer" />
          <label
            className="flex cursor-pointer items-center text-79747F font-circe text-xs before:peer-checked:bg-C8C5CD before:border-C8C5CD before:mr-2 before:block before:content-[' '] before:w-4 before:h-4 before:border-[0.0625rem] before:rounded-sm"
            htmlFor="remember"
          >
            Запомнить меня
          </label>
        </div>
        <button
          className="w-full bg-8D7FC7 font-circe font-bold rounded-[1.875rem] p-3 text-white flex justify-center items-center text-lg mb-4"
          type="submit"
          onClick={logIn}
        >
          Войти
        </button>
        <div className="w-full mb-[4.5rem] flex items-center justify-between">
          <a className="font-circe text-base text-008AFF" href="#">
            Я забыл пароль
          </a>
          <a className="font-circe text-base text-008AFF" href="#">
            Войти как тренер
          </a>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-circe text-base text-323854 mb-1.5">
            Нет аккаунта?
          </span>
          <a className="font-circe text-base text-008AFF" href="#">
            Зарегистрироваться
          </a>
        </div>
      </form>
      <div className="fixed right-1/2 bottom-8 translate-x-1/2">
        <span className="mr-2 cursor-pointer font-circe text-2xl text-7362BC">
          RU
        </span>
        <span className="cursor-pointer font-circe text-base text-79747F">
          EN
        </span>
      </div>
    </>
  );
};
export default Login;
