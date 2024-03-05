import styled from 'styled-components';
import { SidebarContainer } from '../Sidebar.styled';

export const ListFarmStyle = styled.div`
  /* max-height: 282px; */
  /* margin-top: 40px; */
  /* overflow-y: auto; */

  @media screen and (min-width: 768px) {
    /* max-height: 460px; */
    /* max-height: 100%; */
  }
  @media screen and (min-width: 1440px) {
    /* max-height: 206px; */
  }
`;

export const FarmWrapper = styled(SidebarContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: ${p => (p.$isActive ? `#F6F6F7` : `#blue`)};
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: hidden;

  &::after {
    display: ${p => !p.$isActive && 'none'};
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background-color: var(--accent);
    transform: translateX(50%);
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  color: ${p => (p.$isActive ? `#161616` : `rgba(22,22,22,0.5)`)};
  @media screen and (min-width: 768px) {
    column-gap: 8px;
  }
`;
