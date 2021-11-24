import { useFormik } from 'formik';
import { Button, Input } from 'reactstrap';

const isOdd = (num) => num % 2 === 1;

export const Game = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      startingMoney: 0,
      bid: 0,
      color: '',
      amountOfRevs: 0,
    },
    onSubmit: (values) => {
      let winningColor;
      const gameResult = Math.floor(Math.random() * 38);

      if (isOdd(gameResult)) {
        winningColor = 'red';
      } else if (gameResult === 37 || gameResult === 38) {
        winningColor = 'green';
      } else {
        winningColor = 'black';
      }

      if (values.color === winningColor) {
        alert('You won!');
        return;
      }

      alert('You lost!');
    },
  });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Startgeld</h1>
          <Input
            name="startingMoney"
            value={values.startingMoney}
            onChange={handleChange}
          />
        </div>
        <div>
          <h1>Bod</h1>
          <Input name="bid" value={values.bid} onChange={handleChange} />
        </div>
        <div>
          <h1>Kleur</h1>
          <Input name="color" value={values.color} onChange={handleChange} />
        </div>
        <div>
          <h1>Aantal spins</h1>
          <Input
            name="amountOfRevs"
            value={values.amountOfRevs}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" name="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Game;
