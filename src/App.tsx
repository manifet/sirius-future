import {Routes, Route } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
const App: React.FC = () => {
  return (
      <div className="w-screen min-h-screen flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
  );
};
export default App;
