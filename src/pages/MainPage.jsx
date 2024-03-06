import Container from 'components/Container';
import { Main } from 'components/Main/Main.styled';
import MainInner from 'components/Main';
import React from 'react';
import Sidebar from 'components/Sidebar';

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
