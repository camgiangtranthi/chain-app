import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Home, Services, About, Pricing, Newsletter } from '../src/pages';

function App() {
    return (
        <Routes>
            <NavBar />
            <div className="container">
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/newsletter" element={<Newsletter />} />
            </div>
        </Routes>
    );
}

export default App;
