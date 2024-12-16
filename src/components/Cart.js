export default function Cart({ products }) {
  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const productItems = products.map(({ id, name, img, price, quantity }) => (
    <div
      className="product-container col col-12"
      data-count={quantity}
      data-price={price}
      key={id}
    >
      <img className="img-container" alt={name} src={img} />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <img
              className="product-action minus"
              aria-label="minus"
              src="/icons/minus.svg"
            />
            <span className="product-count">{quantity}</span>
            <img
              className="product-action plus"
              aria-label="plus"
              src="/icons/plus.svg"
            />
          </div>
        </div>
        <div className="price">${price}</div>
      </div>
    </div>
  ));
  return (
    <>
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <section
          className="product-list col col-12"
          data-total-price={totalPrice}
        >
          {productItems}
        </section>
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">免費</div>
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price">${totalPrice}</div>
        </section>
      </section>
    </>
  );
}
