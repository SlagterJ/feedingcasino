import { useRouter } from "next/router";
import { Input } from "../../components/Input";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setUser } from "../../global/user";
import { Button } from "reactstrap";
import axios from "axios";

export const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:8000/api/auth/register", values)
        .then((res) => {
          dispatch(setUser(res.data));
          router.push("/");
        });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        title="User Name"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
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
      <Input
        title="Repeat Password"
        name="password_confirmation"
        value={values.password_confirmation}
        onChange={handleChange}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUp;
