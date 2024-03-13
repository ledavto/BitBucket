import axios from 'axios';
import Notiflix from 'notiflix';
import { Component } from 'react';

const URL = 'https://bitbucket-backend.onrender.com';

class ProductItem extends Component {
  fetchProd = async id => {
    const user = await axios.get(`${URL}/api/product/id/${id}`);
    return user;
  };

  addToCart = e => {
    const idProd = e.target.getAttribute('id');

    this.fetchProd(idProd).then(elem => {
      const savedCart = localStorage.getItem('cart') ?? [];
      const parsedCart = savedCart.length > 0 ? JSON.parse(savedCart) : [];
      parsedCart.push(elem.data);
      localStorage.setItem('cart', JSON.stringify(parsedCart));
      Notiflix.Notify.success('Product add to cart!');
      return elem.data;
    });
  };

  render() {
    const { name, picture, price, id } = this.props;
    return (
      <div className="card-product">
        <div className="title-card-product">
          <h2>{name}</h2>
        </div>
        <img src={picture} alt="" width="200" />
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
