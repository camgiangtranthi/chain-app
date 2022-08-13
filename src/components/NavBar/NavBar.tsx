import { Routes, Route } from 'react-router-dom';
import { About, Home, Newsletter, Pricing, Services } from '../../pages';

const NavBar = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/newsletter" element={<Newsletter />} />
            </Routes>
        </div>
    );
};

export default NavBar;
