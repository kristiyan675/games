import {NavLink} from "react-router-dom";

const Header = () =>{


    function clickHandler(e) {
        e.preventDefault()
        if (e.target.tagName === 'A'){
            const url = new URL(e.target.href)
            console.log(url.pathname)
        }
    }

    return (
        <header>
            <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
            <nav>
                <NavLink activeClassName="active-navigation-link" to="/games">All games</NavLink>
                <div id="user">
                    <NavLink activeClassName="active-navigation-link" to="/create">Create Game</NavLink>
                    <NavLink activeClassName="active-navigation-link" to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink activeClassName="active-navigation-link" to="/login">Login</NavLink>
                    <NavLink activeClassName="active-navigation-link" to="/register">Register</NavLink>
                </div>
            </nav>
        </header>
    )
};

export default Header