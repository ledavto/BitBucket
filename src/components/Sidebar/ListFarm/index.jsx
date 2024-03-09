import { useEffect, useState } from 'react';
import { FarmItem } from './FarmItem';
import { ListFarmStyle } from './ListFarm.styled';
import { useDispatch } from 'react-redux';
import { fetchFarms } from '../../../redux/farm/farm-operations';
import { useSearchParams } from 'react-router-dom';

// const farms = [
//   {
//     id: '1',
//     title: 'Благодія',
//   },
//   {
//     id: '2',
//     title: 'Копійка',
//   },
//   {
//     id: '3',
//     title: 'АНЦ',
//   },
// ];

export const ListFarm = () => {
  // const [searchParams] = useSearchParams();
  // const name = searchParams.get('name');
  const dispatch = useDispatch();

  // const [farmId, setFarmId] = useState(2);
  const farmsList = useState(state => state);
  console.log(farmsList);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchFarms());
  }, [dispatch]);

  return (
    <ListFarmStyle>
      <ul>
        {/* {farms.map(({ title, id }) => (
          <li key={id}>
            <FarmItem title={title} id={id} isActive={id + 1 === farmId} />
          </li>
        ))} */}
      </ul>
    </ListFarmStyle>
  );
};
