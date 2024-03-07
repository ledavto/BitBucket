import Container from 'components/Container';
import { Main } from 'components/Main/Main.styled';
import MainInner from 'components/Main';
import React from 'react';
import { Sidebar } from 'components/Sidebar';
import { NavBar } from 'components/NavBar';

const MainPage = () => {
  return (
    <Main>
      <NavBar />
      <Container>
        <Sidebar />
        <MainInner />
      </Container>
    </Main>
  );
};

export default MainPage;
