import { useState } from 'react';
import { ListProductStyle } from './ListProduct.styled';

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
  const [productId] = useState(2);
  return (
    <ListProductStyle>
      <ul>
        {products.map(({ name, id, price, picture }) => (
          <li key={id}>
            <productItem name={title} isActive={id + 1 === farmId} />
          </li>
        ))}
      </ul>
    </ListProductStyle>
  );
};

export default ListFarm;
