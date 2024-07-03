import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../models/hooks";

const RouteWrapper: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default RouteWrapper;
