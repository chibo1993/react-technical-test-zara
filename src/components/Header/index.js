import { BrowserRouter, Link } from "react-router-dom";
import Spinner from "../Spinner";
export default function Header() {
  return (
    <div className="header__container">
        <Link to={"/"}>
          <h1>Podcaster</h1>
        </Link>
        <Spinner /> 
    </div>
  );
}
