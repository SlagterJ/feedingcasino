import { useDispatch } from "../app/hooks";
import { useFormik } from "formik";
import { add } from "../global/toasts";
import { Helmet } from "react-helmet-async";
import Form from "../components/input/Form";

const Home = () => {
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => {
      dispatch(add({ ...values, type: "normal" }));
    },
  });

  return (
    <>
      <Helmet>
        <title>Home | Feeding Casino</title>
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" value={values.title} onChange={handleChange} />
        </label>
        <label>
          Description
          <input
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

export default Home;
