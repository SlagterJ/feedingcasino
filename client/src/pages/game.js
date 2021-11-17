import { useFormik } from "formik";
import { Box } from "../components/Box";
import { Typography } from "../components/Typography";

const isOdd = (num) => num % 2 === 1;

export const Game = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      startingMoney: 0,
      bid: 0,
      color: "",
      amountOfRevs: 0,
    },
    onSubmit: (values) => {
      let winningColor;
      const gameResult = Math.floor(Math.random() * 38);

      if (isOdd(gameResult)) {
        winningColor = "red";
      } else if (gameResult === 37 || gameResult === 38) {
        winningColor = "green";
      } else {
        winningColor = "black";
      }

      if (values.color === winningColor) {
        alert("You won!");
        return;
      }

      alert("You lost!");
    },
  });

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box>
        <Typography>Startgeld</Typography>
        <Box
          component="input"
          name="startingMoney"
          value={values.startingMoney}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Typography>Bod</Typography>
        <Box
          component="input"
          name="bid"
          value={values.bid}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Typography>Kleur</Typography>
        <Box
          component="input"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Typography>Aantal spins</Typography>
        <Box
          component="input"
          name="amountOfRevs"
          value={values.amountOfRevs}
          onChange={handleChange}
        />
      </Box>
      <Box component="button" type="submit" name="submit">
        Submit
      </Box>
    </Box>
  );
};

export default Game;
