import { useState } from 'react';
import ProductItem from './ProductItem';

const products = [
  {
    id: 1,
    name: 'Парацетамол',
    picture: '',
    price: 25,
  },
  {
    id: 2,
    name: 'Валідол',
    picture: '',
    price: 15,
  },
  {
    id: 3,
    name: 'Стрепсілс',
    picture: '',
    price: 48,
  },
];

const ListProduct = () => {
  // const [productId] = useState(2);
  return (
    <ul>
      {products.map(({ name, id, price, picture }) => (
        <li key={id}>
          <ProductItem name={name} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ListProduct;
