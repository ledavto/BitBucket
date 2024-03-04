import ListProduct from 'components/ProductCard/ProductCard';
import { MainContent } from './Main.styled';

// import { Link } from 'react-router-dom';

const MainInner = () => {
  return (
    <MainContent>
      <ListProduct />
    </MainContent>
  );
};

export default MainInner;
