import { Component } from 'react';

class ProductItem extends Component {
  addToCart = e => {
    const savedCart = localStorage.getItem('cart') ?? [];
    const parsedCart = JSON.parse(savedCart);
    console.log(parsedCart);

    const idProd = e.target.getAttribute('id');
    parsedCart.push(idProd);

    localStorage.setItem('cart', JSON.stringify(parsedCart));
  };

  render() {
    const { name, picture, price, id } = this.props;
    return (
      <div className="card-product">
        <div className="title-card-product">
          <h2>{name}</h2>
        </div>
        <img src={picture} alt="" width="40" height="40" />
        <div className="product-price">
          Цена: <span>{price}</span> грн.
        </div>
        <button className="button-add-product" id={id} onClick={this.addToCart}>
          В корзину
        </button>
      </div>
    );
  }
}

export default ProductItem;
