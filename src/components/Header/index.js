import {  Link } from "react-router-dom";
import Spinner from "../Spinner";
import { getIsLoading } from  "../../store/podcast/slice"
import { useSelector } from "react-redux"

export default function Header() {
  const isLoading = useSelector(getIsLoading)
  return (
    <div className="header__container">
        <Link to={"/"}>
          <h1>Podcaster</h1>
        </Link>
        {isLoading && <Spinner />} 
    </div>
  );
}
