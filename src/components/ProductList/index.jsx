import { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductbyFarm } from '../../redux/product/product-operations';
import {
  selectProductByFarm,
  selectProductLoading,
} from '../../redux/product/selectors';

const ListProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const products = useSelector(selectProductByFarm);
  const isLoading = useSelector(selectProductLoading);

  useEffect(() => {
    dispatch(fetchProductbyFarm(params.farmId));
  }, [dispatch, params]);

  return (
    <ul className="card-set">
      <div className="card-set-container">
        {isLoading && <div>Loading...</div>}
        {products.length > 0 &&
          products.map(({ titleProd, price, _id, picture = '' }) => (
            <li key={_id}>
              <ProductItem
                name={titleProd}
                price={price}
                id={_id}
                picture={picture}
              />
            </li>
          ))}
      </div>
    </ul>
  );
};

export default ListProduct;
