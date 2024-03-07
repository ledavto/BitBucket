import { ListFarm } from './ListFarm';

import { StyledSidebar, SidebarContainer } from './Sidebar.styled.js';

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <SidebarContainer>
        <ListFarm></ListFarm>
      </SidebarContainer>
    </StyledSidebar>
  );
};
