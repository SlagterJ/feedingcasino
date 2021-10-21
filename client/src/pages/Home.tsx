import { Helmet } from "react-helmet-async";
import Box from "../components/Box";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Feeding Casino</title>
      </Helmet>
      <Box>
        <h1>Hello, World!</h1>
      </Box>
    </>
  );
};

export default Home;
