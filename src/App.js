import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import FilterCategory from './pages/FilterCategory';
import Err from './pages/Err';
import Home from './pages/Home';
import Review from './pages/Review';
import Landing from './pages/Landing';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { UserContext } from './context/userContext';

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Landing setUser={setUser} />}></Route>
            <Route path="/reviews" element={<Home user={user} />}></Route>
            <Route
              path="/reviews/:review_id"
              element={<Review user={user} />}
            ></Route>
            <Route
              path="/categories/:category"
              element={<FilterCategory user={user} />}
            ></Route>
            <Route path="*" element={<Err />} />
          </Routes>
        </UserContext.Provider>
      </AnimatePresence>
    </div>
  );
}

export default App;
