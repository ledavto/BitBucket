import Container from 'components/Container';
import React from 'react';
import { NavBar } from 'components/NavBar';
import { FormOrder } from 'components/FormOrder';
import CartProductList from 'components/CartProductList';

const CartPage = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <div className="main-section">
          <FormOrder />
          <CartProductList />
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
