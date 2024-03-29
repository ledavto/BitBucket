import Container from 'components/Container';
import React from 'react';
import { Sidebar } from 'components/Sidebar';
import { NavBar } from 'components/NavBar';
import ListProduct from 'components/ProductList';

const MainPage = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <div className="main-section">
          <Sidebar />
          <ListProduct />
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
