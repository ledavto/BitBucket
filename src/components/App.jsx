import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import CartPage from 'pages/CartPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/farm/:farmId" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};
