import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SignIn } from '../../pages';
import './NavBar.scss';

interface Links {
    name: string;
    path: string;
}

const NavBar = () => {
    const [showSignIn, setShowSignIn] = useState(false);
    const location = useLocation();
    const links: Links[] = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Newsletter', path: '/newsletter' },
    ];
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <a href="/" className="navbar__brand">
                        <img src="/images/logo.png" alt="logo" />
                    </a>
                    <div className="navbar__content">
                        <div className="navbar__links">
                            {links.map((link, index) => (
                                <Link
                                    className={location.pathname === link.path ? 'active' : ''}
                                    to={link.path}
                                    key={link.name}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div onClick={() => setShowSignIn(!showSignIn)} className="navbar__btn">
                            <button>Sign In Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {showSignIn && <SignIn />}
        </>
    );
};

export default NavBar;
