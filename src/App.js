import { Route, Routes } from 'react-router-dom';
import './App.css';
import FilterCategory from './pages/FilterCategory';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/categories/:category"
          element={<FilterCategory />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
