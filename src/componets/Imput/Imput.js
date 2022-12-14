import "./Imput.css";
import React from "react";
const Imput = () => {
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
  });
  return (
    <div
      className="container"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(
          `Email: ${formValues.email} , Password ${formValues.password}`
        );
      }}
    >
      <h1>Sing In</h1>
      <form>
        <div className="form">
          <input
            type="email"
            value={formValues.email}
            placeholder="Your Email"
            onChange={(e) =>
              setFormValues((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
        </div>
        <div className="form">
          <input
            type="password"
            value={formValues.password}
            placeholder="Your password"
            onChange={(e) =>
              setFormValues((prev) => ({ ...prev, password: e.target.value }))
            }
            required
          />
        </div>
        <button className="btn">Submit</button>
        <p className="text">
          Don't have an account?
          <a href="#">Create Account</a>
        </p>
      </form>
    </div>
  );
};
export default Imput;
