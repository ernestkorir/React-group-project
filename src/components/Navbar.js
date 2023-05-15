import { NavLink } from 'react-router-dom';
import LogoNavbar from '../asset/LogoNavbar.png'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav>
            <img className='nav-img' src={LogoNavbar} />
            <ul>
                <li><NavLink to='/' style={({ isActive }) => (isActive? { textDecoration: 'underline' }: { textDecoration: 'none' })}>Rockets</NavLink></li>
                <li><NavLink to='/missions' style={({ isActive }) => (isActive? { textDecoration: 'underline' }: { textDecoration: 'none' })}>Missions</NavLink></li>
                <li><NavLink to='/profile' style={({ isActive }) => (isActive? { textDecoration: 'underline' }: { textDecoration: 'none' })}>My Profile</NavLink></li>
            </ul>   
        </nav>
    )
}

export default Navbar