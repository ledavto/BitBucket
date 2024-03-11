import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductbyFarm } from '../../redux/product/product-operations';
import { selectProduct } from '../../redux/product/selectors';

// const products = [
//   {
//     id: 1,
//     name: 'Парацетамол',
//     picture: '',
//     price: 25,
//   },
//   {
//     id: 2,
//     name: 'Валідол',
//     picture: '/images/validol.jpg',
//     price: 15,
//   },
//   {
//     id: 3,
//     name: 'Стрепсілс',
//     picture: '',
//     price: 48,
//   },
//   {
//     id: 4,
//     name: 'Піносол ',
//     picture: '',
//     price: 102,
//   },
//   {
//     id: 5,
//     name: 'Аквамарис',
//     picture: '',
//     price: 130,
//   },
//   {
//     id: 6,
//     name: 'Ношпа',
//     picture: '',
//     price: 102,
//   },
//   {
//     id: 7,
//     name: 'Назонекс',
//     picture: '',
//     price: 130,
//   },
// ];

const ListProduct = () => {
  // const [productId] = useState(2);

  return (
    <ul className="card-set">
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
