import Header from "../../components/Header";
import "./HomePage.css";
import ProductsGrid from "./ProductsGrid";

const HomePage = ({ products, cart }) => {
  return (
    <>
      <title>Ecommerce Project</title>

      <link
        rel="shortcut icon"
        href="images/home-favicon.png"
        type="image/x-icon"
      />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
};

export default HomePage;
