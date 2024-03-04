const ProductItem = ({ id, name, price, picture }) => {
  return (
    <div class="card-product" key={id}>
      <div class="title-card-product">{name}</div>
      <img src="" alt="" width="40" height="40" />
    </div>
  );
};

export default ProductItem;
