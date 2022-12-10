import './Navbar.css'

const Navbar = (props) => {
    return(
        <nav className={`nav-${props.theme}`}>
            <ul >
                <li className='logo'><a className='a-light' href="/">textInfo</a></li>
                <li ><a className='a-light' href="/" >About us</a></li>
            </ul>

        </nav>
    )
}

export default Navbar;