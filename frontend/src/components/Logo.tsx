// with some help from https://www.youtube.com/watch?v=78YM00SO6uk
import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
    <div className="logo" style={{ width: '125px', height: '125px', margin: '-22px', marginLeft: '30px'}}>
        <NavLink to="/"><img src="\images\chickenLogo.png" alt="logo from canva.com"/></NavLink>
    </div>
    )
}

export default Logo