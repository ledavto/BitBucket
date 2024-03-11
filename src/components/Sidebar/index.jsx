import { fetchFarms } from '../../redux/farm/farm-operations';
import { selectFarm } from '../../redux/farm/selectors';
import { ListFarm } from './ListFarm';

import { StyledSidebar, SidebarContainer } from './Sidebar.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductbyFarm } from '../../redux/product/product-operations';
import { selectProduct } from '../../redux/product/selectors';

export const Sidebar = () => {
  const farms = useSelector(selectFarm);
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();

  const params = useParams();

  console.log('Products -> ', products);

  useEffect(() => {
    // console.log(params.farmId);
    dispatch(fetchProductbyFarm(params.farmId));
  }, [dispatch, params.farmId]);

  // console.log('----->', farms);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchFarms());
  }, [dispatch]);

  return (
    <StyledSidebar>
      <SidebarContainer>
        <ListFarm farms={farms} />
      </SidebarContainer>
    </StyledSidebar>
  );
};
