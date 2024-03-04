import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
// import NotFound from './NotFound/NotFound';
// import ThemeProvider from '../providers/themeProvider';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
