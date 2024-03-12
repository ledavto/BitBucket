import { fetchFarms } from '../../redux/farm/farm-operations';
import { selectFarm } from '../../redux/farm/selectors';
import { ListFarm } from './ListFarm';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Sidebar = () => {
  const farms = useSelector(selectFarm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFarms());
  }, [dispatch]);

  return (
    <div className="sidebar-section">
      <ListFarm farms={farms} />
    </div>
  );
};
