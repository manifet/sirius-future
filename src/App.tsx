import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "./models/hooks";
import { useEffect } from "react";
const App: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    navigate("/");
  }, [isLoggedIn, navigate]);

  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
};
export default App;
