import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/about");
  };
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button onClick={onClick}>about</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
