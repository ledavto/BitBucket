import { fetchFarms } from '../../redux/farm/farm-operations';
import { selectFarm, selectLoading } from '../../redux/farm/selectors';
import { ListFarm } from './ListFarm';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Sidebar = () => {
  const farms = useSelector(selectFarm);
  const isLoadingFarm = useSelector(selectLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFarms());
  }, [dispatch, isLoadingFarm]);

  return (
    <div className="sidebar-section">
      {isLoadingFarm && <div>Loading...</div>}
      <ListFarm farms={farms} />
    </div>
  );
};
