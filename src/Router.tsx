import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TanstackPage from './pages/examples/TanstackPage';
import MainPage from './pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/examples/tanstack" element={<TanstackPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
