import { Link } from 'react-router-dom';

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
            <a href="/" className="logo"></a>
            <div className="navbar__links">
                {links.map((link) => (
                    <Link to={link.path}>{link.name}</Link>
                ))}
            </div>
            hello
        </div>
    );
};

export default NavBar;
