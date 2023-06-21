import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";

function Home() {
  // 현재 위치에 대한 URL의 쿼리 문자열을 읽고 수정하는 데 사용
  // ☆☆☆ 현재 위치 search params와 이를 업데이트에 사용하는 함수 두 가지 값 배열 반환
  //  useState와 같은 개념
  const { readSearchParams, setReadSearchParams } = useSearchParams();
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
