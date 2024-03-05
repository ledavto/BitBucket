import styled from 'styled-components';

export const Main = styled.div`
  /* height: 100vh;
  width: 100vw; */
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`;
export const MainContent = styled.div`
  /* height: 100vh; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  
  .MainContent__navigation {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 340px) {

  }
  @media screen and (min-width: 768px) {

  }
`;
