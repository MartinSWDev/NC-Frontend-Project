import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Review from './pages/Review';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews/:review_id" element={<Review />}></Route>
      </Routes>
    </div>
  );
}

export default App;
