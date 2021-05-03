import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "raisan",
  email: "",
  channel: "",
  phonenumber: ""
};

const onSubmit = (values) => {
  console.log("submit values", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.email) {
    errors.email = "required";
  } else if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "email is invalid";
  }
  if (!values.channel) {
    errors.channel = "required";
  }
  if (!values.phonenumber) {
    errors.phonenumber = "required";
  } else if (
    /+91)?(-)?\s*?(91)?\s*?(\d{3})-?\s*?(\d{3})-?\s*?(\d{4}/.test(
      values.phonenumber
    )
  ) {
    errors.phonenumber = "phonenumber is invalid";
  }
  return errors;
};

function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  //  console.log("formik values",formik.values);
  console.log("formik errors", formik.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* name */}
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>
        {/* email */}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>
        {/* channel */}
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
        </div>
        {/* phone */}
        <div className="form-control">
          <label htmlFor="phonenumber">Phone</label>
          <input
            type="tel"
            id="phonenumber"
            name="phonenumber"
            onChange={formik.handleChange}
            value={formik.values.phonenumber}
          />
          {formik.errors.phonenumber ? (
            <div className="error">{formik.errors.phonenumber}</div>
          ) : null}
        </div>
        {/* submit */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default YoutubeForm;
