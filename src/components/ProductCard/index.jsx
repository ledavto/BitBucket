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
    picture: '/images/validol.jpg',
    price: 15,
  },
  {
    id: 3,
    name: 'Стрепсілс',
    picture: '',
    price: 48,
  },
  {
    id: 4,
    name: 'Піносол ',
    picture: '',
    price: 102,
  },
  {
    id: 5,
    name: 'Аквамарис',
    picture: '',
    price: 130,
  },
  {
    id: 6,
    name: 'Ношпа',
    picture: '',
    price: 102,
  },
  {
    id: 7,
    name: 'Назонекс',
    picture: '',
    price: 130,
  },
];

const ListProduct = () => {
  // const [productId] = useState(2);
  return (
    <ul class="card-set">
      {products.map(({ name, id, price, picture }) => (
        <li key={id}>
          <ProductItem name={name} id={id} picture={picture} />
        </li>
      ))}
    </ul>
  );
};

export default ListProduct;
