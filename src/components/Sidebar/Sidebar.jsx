import ListFarm from './ListFarm/ListFarm';

import { StyledSidebar, SidebarContainer } from './Sidebar.styled.js';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <SidebarContainer>
        <ListFarm></ListFarm>
      </SidebarContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
