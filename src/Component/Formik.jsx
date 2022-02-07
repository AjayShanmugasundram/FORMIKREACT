import React from "react";
import Stack from "@mui/material/Stack";
import "../App.css";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Formik } from "formik";
function Formik1() {
  const initialValues = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Gender: "",
    Course: "SELECT THE COURSE",
  };
  const validate = (value) => {
    var errors = {};
    if (value.Firstname === "") errors.Firstname = "Firstname is required";
    if (value.Lastname === "") errors.Lastname = "lastname is required";
    if (value.Email === "") errors.Email = "Email is required";
    if (value.Gender === "") errors.Gender = "Gender is required";
    if (value.Course === "") errors.Courses = "Courses is required";
    return errors;
  };
  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(value) => validate(value)}
      onSubmit={(value) => handleSubmit(value)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        /* and other goodies */
      }) => (
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Typography variant="h3" component="div" gutterBottom>
              FORMIK FORM
            </Typography>
            <div>
              <label>First Name:</label>
              <input
                className="inputtype1"
                type="text "
                value={values.Firstname}
                onChange={handleChange}
                name="Firstname"
                onBlur={handleBlur}
              ></input>
            </div>
            <sub style={{ color: "red" }}>
              {touched.Firstname && errors.Firstname}
            </sub>
            <br /> <br />
            <div>
              <label>Last Name:</label>
              <input
                className="inputtype1"
                type="text"
                value={values.Lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                name="Lastname"
              ></input>
              <div>
                <sub style={{ color: "red" }}>
                  {touched.Lastname && errors.Lastname}
                </sub>
              </div>
            </div>
            <br /> <br />
            <div>
              <label>Email:</label>
              <input
                className="inputtype2"
                type="text"
                name="Email"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              <div>
                <sub style={{ color: "red" }}>
                  {touched.Email && errors.Email}
                </sub>
              </div>
            </div>
            <br /> <br />
            <div>
              <label>Gender:</label>
              <input
                type="radio"
                name="Gender"
                onBlur={handleBlur}
                onChange={handleChange}
              ></input>
              Male
              
              <input type="radio" name="Gender"
               value={values.Gender}
                onBlur={handleBlur}
                onChange={handleChange}></input>
              Female
            <div>
            <sub style={{ color: "red" }}>
              {touched.Gender && errors.Gender}
            </sub>
            </div>
            </div>
            <br /><br/>
            <div>
              Course:{" "}
              <select
                className="inputtype3"
                name="course"
                value={values.Course}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>SELECT THE COURSE</option>
                <option>ANGULAR</option>
                <option>REACT</option>
                <option>VUE</option>
              </select>
            </div>
            <br /> <br />
            <Typography
              style={{ color: "red" }}
              variant="button"
              display="block"
            ></Typography>
            <br></br>
            <br></br>
            <Stack spacing={45} direction="row">
              <Button variant="contained" type="submit">
                Submit
              </Button>{" "}
              {/* ype-submit t0 check the submit  button in the form */}
            </Stack>
          </form>
        </Container>
      )}
    </Formik>
  );
}

export default Formik1;
