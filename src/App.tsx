import { Outlet } from "react-router-dom";
const App: React.FC = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
};
export default App;
