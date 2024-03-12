import { Component, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductbyFarm } from '../../redux/product/product-operations';
import {
  selectProductByFarm,
  selectProductLoading,
} from '../../redux/product/selectors';

class CartProductList extends Component {
  componentDidMount() {
    console.log('Render 1');

    const savedCart = localStorage.getItem('cart') ?? [];
    const parsedCart = JSON.parse(savedCart);
    console.log(parsedCart);
  }

  // const dispatch = useDispatch();

  // const params = useParams();
  // const products = useSelector(selectProductByFarm);
  // const isLoading = useSelector(selectProductLoading);

  // const urlApi = window.location.host;
  // const fetchProducts = async () => {
  //   const response = await axios.get(`${urlApi}/api/farm`);
  //   setPorducts([...response]);
  // };

  // useEffect(() => {
  //   // dispatch(fetchProductbyFarm(params.farmId));
  // }, [dispatch]);
  render() {
    return (
      <ul className="card-set">
        {/* {isLoading && <div>Loading...</div>} */}
        {/* {products.length > 0 &&
        products.map(({ titleProd, price, _id, picture = '' }) => (
          <li key={_id}>
            <ProductItem
              name={titleProd}
              price={price}
              id={_id}
              picture={picture}
            />
          </li>
        ))} */}
      </ul>
    );
  }
}

export default CartProductList;
