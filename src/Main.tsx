import Header from "./Header";
import Sidebar from "./Sidebar";

const Main: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Header />
      </div>
    </div>
  );
};
export default Main;
