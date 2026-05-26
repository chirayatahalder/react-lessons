import Header from "../components/Header";

const Error404 = ({ cart }) => {
  return (
    <>
      <Header cart={cart} />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        Error 404 : Page Not Found
      </div>
    </>
  );
};

export default Error404;
