import { useFormik } from "formik";
import { Input } from "../components/Input";
import { Button } from "reactstrap";

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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Input
          title="Starting Money"
          name="startingMoney"
          value={values.startingMoney}
          onChange={handleChange}
        />
        <Input
          title="Bod"
          name="bid"
          value={values.bid}
          onChange={handleChange}
        />
        <Input
          title="Colour"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <Input
          title="Amount of Revs"
          name="amountOfRevs"
          value={values.amountOfRevs}
          onChange={handleChange}
        />
        <Button type="submit" name="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Game;
