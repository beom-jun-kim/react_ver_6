import { useParams } from "react-router-dom";
import { users } from "../../db";
import { Link, Outlet } from "react-router-dom";

function User() {

  //  Route path와 일치하는 현재 URL에서 동적 매개변수의 key/value 쌍 객체를 반환. 
  // 하위 경로는 상위 경로에서 모든 매개변수를 상속한다
  const { userId } = useParams();
  return (
    <div>
      <h1>
        사용자의 아이디는 {userId} , 이름은 {users[Number(userId) -1].name}
      </h1>
      <hr />

      {/* 절대 경로로 하면 root경로에서 /가 붙는다 */}
      <Link to="followers">자식컴포넌트 →</Link>

      {/* 이 Route (User)에 자식을 render하게 된다 */}
      <Outlet />
    </div>
  );
}

export default User;
