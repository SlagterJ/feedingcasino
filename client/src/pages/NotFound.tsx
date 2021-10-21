import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Feeding Casino</title>
      </Helmet>
      <div>
        <h1>Page was not found</h1>
      </div>
    </>
  );
};

export default NotFound;
