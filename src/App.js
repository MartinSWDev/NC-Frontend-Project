import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Err from './pages/Err';
import Home from './pages/Home';
import Review from './pages/Review';
import Landing from './pages/Landing';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/reviews" element={<Home />}></Route>
          <Route path="/reviews/:review_id" element={<Review />}></Route>
          <Route path="*" element={<Err />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
