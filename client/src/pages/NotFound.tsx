import { Helmet } from "react-helmet-async";
import Box from "../components/Box";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Feeding Casino</title>
      </Helmet>
      <Box>
        <h1>Page was not found</h1>
      </Box>
    </>
  );
};

export default NotFound;
