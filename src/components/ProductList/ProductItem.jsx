const ProductItem = ({ id, name, price, picture }) => {
  return (
    <div class="card-product" key={id}>
      <div class="title-card-product">
        <h2>{name}</h2>
      </div>
      <img src={picture} alt="" width="40" height="40" />
      <div class="product-price">
        Цена: <span>{price}</span>
      </div>
      <button class="button-add-product">Добавить</button>
    </div>
  );
};

export default ProductItem;
