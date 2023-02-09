import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommunityDropdown from './CommunityDropdown';
import ConnectedDropdown from './ConnectedDropdown';
import SearchBar from './SearchBar';
import './Navbar.css'
import Logo from './primarylogo.png';

function Navbar() {
    //toggle hamburger menu not visible on desktop
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    // toggle hamburger menu to only be visible on mobile
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };
    //exit menu for hamburger menu
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbarcontainer'>

                {/* logo/link to homepage */}
                <div className='logo'>

                    <Link to='/' className='nav-item navbar-logo'>
                        <img src={Logo} alt='logo' />
                    </Link>

                </div>

                <div className='searchcontainer'>
                    <input
                        className="searchbar"
                        type="search"
                        placeholder="Search by Title, ISBN, Tag, Keyword...">
                    </input>

                    <button className="searchbutton" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </div>

                <div className='nav-container'>
                    <div className='navbar'>

                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                            <li className='nav-item'>
                                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                    PRODUCTS
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/donate' className='nav-links' onClick={closeMobileMenu}>
                                    DONATE/TRADE
                                </Link>
                            </li>

                            <li className='nav-item'
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <Link to='/community' className='nav-links' onClick={closeMobileMenu}>
                                    COMMUNITY <i className='fas fa-caret-down' />
                                </Link>

                                {dropdown && <CommunityDropdown />}
                            </li>

                            <li className='nav-item'
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <Link to='/connected' className='nav-links' onClick={closeMobileMenu}>
                                    GET CONNECTED <i className='fas fa-caret-down' />
                                </Link>
                                {dropdown && <ConnectedDropdown />}
                            </li>

                            <li className='nav-item-last'>
                                <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


            <nav className='navbar greenNav'>
                <h2 className='nav-item green-nav-item'>OFFERS</h2>
                <div className='nav-item green-nav-item'> - </div>
                <h2 className='nav-item green-nav-item'>PROMO CODE</h2>
                <div className='nav-item green-nav-item'> - </div>
                <h2 className='nav-item green-nav-item'>ANNOUNCEMENTS</h2>
            </nav>
        </>
    )
}

export default Navbar;