import './Navbar.css'

const Navbar = () => {
    return(
        <nav className='nav-light'>
            <ul >
                <li className='logo'><a className='a-light' href="/">textInfo</a></li>
                <li ><a className='a-light' href="/" >About us</a></li>
            </ul>

        </nav>
    )
}

export default Navbar;