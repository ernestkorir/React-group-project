import { NavLink } from 'react-router-dom';
import LogoNavbar from '../asset/LogoNavbar.png'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav>
            <div className='nav-title'>
            <img className='nav-img' src={LogoNavbar} />
            <h1>Space Travelers' Hub</h1>
            </div>
            
            <ul>
                <li><NavLink to='/' style={({ isActive }) => (isActive? { textDecoration: 'underline' }: { textDecoration: 'none' })}>Rockets</NavLink></li>
                <li><NavLink to='/missions' style={({ isActive }) => (isActive? { textDecoration: 'underline' }: { textDecoration: 'none' })}>Missions</NavLink></li>
                <li><NavLink to='/profile' style={({ isActive }) => (isActive? { textDecoration: 'underline' }: { textDecoration: 'none' })}>My Profile</NavLink></li>
            </ul>   
        </nav>
    )
}

export default Navbar