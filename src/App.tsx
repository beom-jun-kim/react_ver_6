import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      {/* 컴포넌트 대체 */}
      <Outlet />
    </div>
  );
}

export default App;
