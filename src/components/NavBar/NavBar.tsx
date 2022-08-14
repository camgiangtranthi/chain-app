import { Link, useLocation } from 'react-router-dom';
import './NavBar.scss';

interface Links {
    name: string;
    path: string;
}

const NavBar = () => {
    const location = useLocation();
    const links: Links[] = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Newsletter', path: '/newsletter' },
    ];
    return (
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
                    <div className="navbar__btn">
                        <button>Sign In Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
