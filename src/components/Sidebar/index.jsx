import { fetchFarms } from '../../redux/farm/farm-operations';
import { selectFarm } from '../../redux/farm/selectors';
import { ListFarm } from './ListFarm';

import { StyledSidebar, SidebarContainer } from './Sidebar.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Sidebar = () => {
  const farms = useSelector(selectFarm);
  const dispatch = useDispatch();

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
