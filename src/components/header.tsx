import { NavLink } from "react-router-dom";
import '../components/header.scss';




const Header = () =>{
    return(
        <header>
<nav>
    <div className="nav-logo">
        <span>SO</span>
    </div>
    <div className="navlinks">
        <NavLink to="./">Home</NavLink>
<NavLink to="about">About</NavLink>
    <NavLink to="project">Projects</NavLink>
    </div>
</nav>
        </header>
    )
}
export default Header;