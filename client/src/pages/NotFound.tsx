import { Helmet } from "react-helmet-async";
import Box from "../components/Box";
import Typography from "../components/Typography";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Feeding Casino</title>
      </Helmet>
      <Box>
        <Typography variant="h1">Page was not found</Typography>
      </Box>
    </>
  );
};

export default NotFound;
