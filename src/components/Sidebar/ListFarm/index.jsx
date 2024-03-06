import { useState } from 'react';
import FarmItem from './FarmItem';
import { ListFarmStyle } from './ListFarm.styled';

const farms = [
  {
    id: 1,
    title: 'Благодія',
  },
  {
    id: 2,
    title: 'Копійка',
  },
  {
    id: 3,
    title: 'АНЦ',
  },
];

const ListFarm = () => {
  const [farmId, setFarmId] = useState(2);
  return (
    <ListFarmStyle>
      <ul>
        {farms.map(({ title, id }) => (
          <li key={id}>
            <FarmItem title={title} isActive={id + 1 === farmId} />
          </li>
        ))}
      </ul>
    </ListFarmStyle>
  );
};

export default ListFarm;
