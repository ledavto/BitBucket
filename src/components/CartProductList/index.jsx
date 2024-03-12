import { Component, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductbyFarm } from '../../redux/product/product-operations';
import {
  selectProductByFarm,
  selectProductLoading,
} from '../../redux/product/selectors';

class CartProductList extends Component {
  state = {
    cartProd: [],
  };

  componentDidMount() {
    const savedCart = localStorage.getItem('cart') ?? [];
    const products = JSON.parse(savedCart);

    this.setState({ cartProd: products });
  }

  render() {
    const { cartProd } = this.state;
    return (
      <div className="card-set">
        {cartProd.map(item => {
          return (
            <div className="card-product">
              <div className="title-card-product">
                <h2>{item.titleProd}</h2>
                <img src={item.picture} alt="" width="40" height="40" />
                <div className="product-price">
                  Цена: <span>{item.price}</span> грн.
                </div>
              </div>
            </div>
          );
        })}
        ;
      </div>
    );
  }
}

export default CartProductList;
