import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Home, Services, About, Pricing, Newsletter } from '../src/pages';

function App() {
    return (
        <Router>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/newsletter" element={<Newsletter />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
