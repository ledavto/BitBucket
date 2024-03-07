import { useEffect, useState } from 'react';
import { FarmItem } from './FarmItem';
import { ListFarmStyle } from './ListFarm.styled';
import { useDispatch } from 'react-redux';
import { fetchFarms } from '../../../redux/farm/farm-operations';

const farms = [
  {
    id: '1',
    title: 'Благодія',
  },
  {
    id: '2',
    title: 'Копійка',
  },
  {
    id: '3',
    title: 'АНЦ',
  },
];

export const ListFarm = () => {
  const dispatch = useDispatch();

  const [farmId, setFarmId] = useState(2);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchFarms());
  }, [dispatch]);

  return (
    <ListFarmStyle>
      <ul>
        {farms.map(({ title, id }) => (
          <li key={id}>
            <FarmItem title={title} id={id} isActive={id + 1 === farmId} />
          </li>
        ))}
      </ul>
    </ListFarmStyle>
  );
};
