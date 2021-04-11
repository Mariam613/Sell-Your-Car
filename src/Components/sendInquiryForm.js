import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as classes from "../Styles/sendInquireForm.module.css";
import { btnRounded } from "../Styles/nav.module.css";
export default function SendInquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  //   const [validated, setValidated] = useState(false);
  //   const handleSubmit = (event) => {
  //     const form = event.currentTarget;

  //     console.log(form.checkValidity());
  // if (form.checkValidity() === false) {
  // event.preventDefault();
  //   event.stopPropagation();
  // }

  // setValidated(true);
  //   };k
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(Object.keys(errors).length, errors, watch());
  return (
    <div className={classes.formContainer}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(errors).length === 4 &&
          !watch().fullName &&
          !watch().phone &&
          !watch().carBrand &&
          !watch().carModel && (
            <p className="h4 text-white p-3">
              * All fields are required to be filled
            </p>
          )}
        <h2 className="ml-3">Enter your car details</h2>
        <Form className={classes.formContent}>
          <label
            htmlFor="Car Make"
            className="h4 font-weight-lighter mb-3 mt-3"
          >
            {" "}
            Car Make
          </label>
          <select
            {...register("carBrand", { required: true })}
            className={`d-block `}
          >
            <option value="">Select Brand</option>
            <option value="lime">Renault</option>
          </select>
          {errors.carBrand && (
            <p className="h4 text-white p-3">Please select a car brand</p>
          )}
          <label
            htmlFor=" Car Model"
            className="h4 font-weight-lighter mb-3 mt-3"
          >
            {" "}
            Car Model
          </label>
          <select
            {...register("carModel", { required: true })}
            className="d-block "
          >
            <option value="">Select Model</option>
            <option value="Captur">Captur</option>
          </select>
          {errors.carModel && (
            <p className="h4 text-white p-3">Please select a car model</p>
          )}
          <h2 className="mb-5 mt-5">Enter your Contact Info</h2>
          <Form.Group as={Row} controlId="validationCustom01" className="ml-2">
            <Form.Label className="h4 font-weight-lighter mb-3 mt-3">
              Your Full Name
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", { required: true })}
              className="p-4"
            />
            {errors.fullName && (
              <p className="h4 text-white p-3">Full name is required.</p>
            )}
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group as={Row} controlId="validationCustom02" className="ml-2">
            <Form.Label className="h4 font-weight-lighter mb-3 mt-3">
              Your Phone Number
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="phone"
              placeholder="EX: +972 897 564 34"
              {...register("phone", { required: true })}
              className="p-4"
            />
            {errors.phone && (
              <p className="h4 text-white p-3">Phone is required.</p>
            )}
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
          </Form.Group>
        </Form>

        <Button type="submit" className={`${btnRounded} ml-5`}>
          Send Your Inquiry <i class="fas fa-chevron-right ml-2"></i>
        </Button>
      </Form>
    </div>
  );
}
