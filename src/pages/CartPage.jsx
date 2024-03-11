import Container from 'components/Container';
import React from 'react';
import { NavBar } from 'components/NavBar';
import { FormOrder } from 'components/FormOrder';
import ListProduct from 'components/ProductList';

const CartPage = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <div className="main-section">
          <FormOrder />
          <ListProduct />
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
