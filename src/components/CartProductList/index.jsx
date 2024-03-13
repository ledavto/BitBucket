import { Component } from 'react';

class CartProductList extends Component {
  state = {
    cartProd: [],
  };

  componentDidMount() {
    if (localStorage.getItem('cart') !== null) {
      const savedCart = localStorage.getItem('cart') ?? [];
      const products = JSON.parse(savedCart);

      this.setState({ cartProd: products });
    }
  }

  render() {
    const { cartProd } = this.state;
    return (
      <div className="card-set">
        <div className="card-set-container">
          {cartProd.length > 0 ? (
            cartProd.map(item => {
              return (
                <div key={item._id} className="card-product">
                  <div className="title-card-product">
                    <h2>{item.titleProd}</h2>
                  </div>
                  <img src={item.picture} alt="" width="200" />
                  <div className="product-price">
                    Цена: <span>{item.price}</span> грн.
                  </div>
                </div>
              );
            })
          ) : (
            <p>No products in your cart</p>
          )}
        </div>
      </div>
    );
  }
}

export default CartProductList;
