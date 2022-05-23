import { Link, NavLink } from "react-router-dom";

export function Header() {
    return (
        <div className="header">
            <h1><Link to='/filmFinder' className='hLink'>FILM FINDER</Link></h1>
            <nav className="headerNav">
                <NavLink to='/filmFinder/most-popular' className="navLink">Most popular</NavLink>
                <NavLink to='/filmFinder/most-rated'className="navLink">Most rated</NavLink>
                <NavLink to='/filmFinder/latest'className="navLink">Latest</NavLink>
            </nav>
        </div>
    )
}