import { useFormik, Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const basicSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required").min(8),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const SignUp = () => {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: { basicSchema },
    onSubmit,
  });
  console.log(errors);
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={basicSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log("Ready To Go!");
          console.log(values);
          console.log("errors", errors);
          navigate("/success", {
            state: {
              email: values.email,
            },
          });
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="field">
              <Field
                name="username"
                className="input name"
                placeholder="username"
              />
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ) : null}
            </div>

            <div className="field">
              <Field
                name="email"
                type="email"
                className="input"
                placeholder="email"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>

            <div className="field">
              <Field
                name="password"
                className="input"
                placeholder="password"
                type="password"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>

            <div className="field">
              <Field
                name="passwordConfirmation"
                className="input"
                placeholder="confirm password"
                type="password"
              />
              {errors.passwordConfirmation && touched.passwordConfirmation ? (
                <div>{errors.passwordConfirmation}</div>
              ) : null}
            </div>

            <button
              disabled={isSubmitting}
              onSubmit={onSubmit}
              type="submit"
              className="btn"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignUp;
