import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>Header here</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Log in</NavLink></li>
                </ul>
            </nav>
        </header>);
}

export default Header