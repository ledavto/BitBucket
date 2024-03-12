import { fetchFarms } from '../../redux/farm/farm-operations';
import { selectFarm } from '../../redux/farm/selectors';
import { ListFarm } from './ListFarm';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductbyFarm } from '../../redux/product/product-operations';
import { selectProduct } from '../../redux/product/selectors';

export const Sidebar = () => {
  const farms = useSelector(selectFarm);

  const dispatch = useDispatch();

  // console.log('Products -> ', products);

  console.log('----->', farms);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchFarms());
  }, [dispatch]);

  return (
    <div className="sidebar-section">
      <ListFarm farms={farms} />
    </div>
  );
};
