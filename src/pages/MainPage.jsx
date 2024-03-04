import Container from 'components/Container/Container';
import { Main } from 'components/Main/Main.styled';
import MainInner from 'components/Main/Main';
import React from 'react';
import Sidebar from 'components/Sidebar/Sidebar';

const MainPage = () => {
  return (
    <Main>
      <Container>
        <Sidebar />
        <MainInner />
      </Container>
    </Main>
  );
};

export default MainPage;
