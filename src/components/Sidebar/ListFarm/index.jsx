import { useEffect } from 'react';
import { FarmItem } from './FarmItem';
import { ListFarmStyle } from './ListFarm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFarms } from '../../../redux/farm/farm-operations';
import { useSearchParams } from 'react-router-dom';

export const ListFarm = ({ farms }) => {
  return (
    <ListFarmStyle>
      <ul>
        {farms.map(({ title, _id }) => (
          <li key={_id}>
            <FarmItem title={title} _id={_id} />
          </li>
        ))}
      </ul>
    </ListFarmStyle>
  );
};
