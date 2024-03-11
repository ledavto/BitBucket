import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductbyFarm } from '../../redux/product/product-operations';
import { selectProduct } from '../../redux/product/selectors';

const ListProduct = () => {
  // const products = useSelector(selectProduct);
  return (
    <ul className="card-set">
      {/* {products.isLoading && <div>Loading...</div>} */}
      {/* {products.length > 0 &&
        products.map(({ titleProd, id, price, picture = '' }) => (
          <li key={id}>
            <ProductItem
              name={titleProd}
              price={price}
              id={id}
              picture={picture}
            />
          </li>
        ))} */}
    </ul>
  );
};

export default ListProduct;
