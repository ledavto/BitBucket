import { FarmWrapper, TitleWrapper } from './ListFarm.styled';

const ProductItem = ({ name, price, picture }) => {
  return (
    <FarmWrapper>
      <TitleWrapper>
        <p>{title}</p>
      </TitleWrapper>
    </FarmWrapper>
  );
};

export default ProductItem;
