import {NavLink, Outlet} from "react-router-dom"
import s from "./Navigation.module.css";

const setActive = ({ isActive }) => (isActive ? s.ActiveLink : s.Link);


const Navigation = () => {
    return (
        <>
        <nav className={s.Navigation}>
            <NavLink
                className={setActive}
                to='/'>Home
            </NavLink>

            <NavLink
                className={setActive}
                to='/movies'>Movies
            </NavLink>
        </nav>  
            <Outlet />
            <footer>
                
            </footer>
        </>
        
    )
}

export default Navigation;