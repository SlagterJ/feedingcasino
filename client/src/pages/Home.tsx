import { Helmet } from "react-helmet-async";
import Box from "../components/Box";
import Typography from "../components/Typography";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Feeding Casino</title>
      </Helmet>
      <Box>
        <Typography variant="h1">Hello, World!</Typography>
      </Box>
    </>
  );
};

export default Home;
