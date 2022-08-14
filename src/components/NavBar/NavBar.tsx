import { Link } from 'react-router-dom';
import './NavBar.scss';

interface Links {
    name: string;
    path: string;
}

const NavBar = () => {
    const links: Links[] = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Newsletter', path: '/newsletter' },
    ];
    return (
        <div className="navbar">
            <div className="container">
                <a href="/" className="navbar__brand">
                    <img src="/images/logo.png" alt="logo" />
                </a>
                <div className="navbar__content">
                    <div className="navbar__links">
                        {links.map((link, index) => (
                            <Link key={index} to={link.path}>
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
