function Product1({ title, price, description }) {
  return (
    <div className="product-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <strong>Price: ₹{price}</strong>
    </div>
  );
}

export default Product;