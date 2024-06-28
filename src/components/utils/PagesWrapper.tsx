import Header from "../Header";
import SideBar from "../Sidebar";
const PagesWrapper: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  return (
    <div className="w-full max-w-[1390px] max-h-[45.5rem] flex">
      <SideBar />
      <div className="w-full flex-auto flex flex-col grow shrink">
        <Header />
        <div className="w-full flex-auto pt-5 pr-[3.125rem] pl-8 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};
export default PagesWrapper;
