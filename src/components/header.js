import {NavLink} from "react-router-dom";

const Header = () =>{

    return (
        <header>
            <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
            <nav>
                <NavLink activeclassname="active-navigation-link" to="/games">All games</NavLink>
                <div id="user">
                    <NavLink activeclassname="active-navigation-link" to="/create">Create Game</NavLink>
                    <NavLink activeclassname="active-navigation-link" to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink activeclassname="active-navigation-link" to="/login">Login</NavLink>
                    <NavLink activeclassname="active-navigation-link" to="/register">Register</NavLink>
                </div>
            </nav>
        </header>
    )
};

export default Header