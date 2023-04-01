import { BrowserRouter, Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header__container">
        <Link to={"/"}>
          <h1>Podcaster</h1>
        </Link>
    </div>
  );
}
