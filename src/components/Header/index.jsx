import "./style.css";
import { Link } from "react-router-dom";
function Header(){
    return(
        <div>
            <header>
                <Link id="logo" to={"/"}>BLOG</Link>
            </header>
        </div>
    );
}

export default Header;