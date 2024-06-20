import Header from "../Header";
import SideBar from "../Sidebar";
const PagesWrapper: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  return (
    <div className="w-full max-w-[1390px] flex">
      <SideBar />
      <div className="h-full grow shrink w-full flex flex-col">
        <Header />
        <div className="w-full pt-5 pr-[3.125rem] pl-8 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};
export default PagesWrapper;
