import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
// import NotFound from './NotFound/NotFound';
// import ThemeProvider from '../providers/themeProvider';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/farm/:farmId" element={<MainPage />} /> */}

        {/* <Route
          path="/cart"
          element={
            <RestrictedRoute
              redirectTo="/cart"
              component={<h2>CART PAGE</h2>}
            />
          }
        />
        <Route path="*" element={<h1>NOT FOUND PAGE</h1>} /> */}
      </Routes>
    </div>
  );
};
