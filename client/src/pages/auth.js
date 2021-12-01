import { useRouter } from "next/router";
import { useFormik } from "formik";
import axios from "axios";
import { Input } from "../components/Input";

export const Auth = () => {
  const router = useRouter();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios.post("localhost:8000/api/auth/login", values).then((res) => {
        // router.push("/");
        console.log(res.access_token);
      });
    },
  });

  return (
    <div>
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
    </div>
  );
};

export default Auth;
