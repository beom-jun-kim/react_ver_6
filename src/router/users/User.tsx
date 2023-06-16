import { useParams } from "react-router-dom";
import { users } from "../../db";

function User() {

  //  Route path >와 일치하는 현재 URL에서 동적 매개변수의 key/value 쌍 객체를 반환. 
  // 하위 경로는 상위 경로에서 모든 매개변수를 상속
  const { userId } = useParams();
  return (
    <div>
      <h1>
        사용자의 아이디는 {userId} , 이름은 {users[Number(userId) -1].name}
      </h1>
    </div>
  );
}

export default User;
