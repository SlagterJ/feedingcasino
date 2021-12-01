import { useRouter } from "next/router";
import { useFormik } from "formik";
import axios from "axios";
import { Input } from "../components/Input";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../global/user";

export const Auth = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios.post("http://localhost:8000/api/auth/login", values).then((res) => {
        console.log(res);
        dispatch(setUser(res.data));
        router.push("/");
      });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1 variant="h1">Authentication</h1>
      <Input
        title="E-Mail"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <Input
        title="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Auth;
