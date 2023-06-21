import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      {/* 하위 컴포넌트 대체 */}
      {/* context: 하위의 모든 화면과 소통하게 된다 */}
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default App;
