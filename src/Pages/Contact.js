import React from "react";
import { useForm } from "react-hook-form";
import { postData } from "../utils/api";
import { showSuccess, showError } from "../utils/toastUtils";
import Footer from "../Components/Footer";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

    console.log("data",isSubmitting)

 const onSubmit = async (data) => {
  showSuccess("Sending your message..."); // show toast early

  try {
    await postData("/contact", data);
    showSuccess("Message sent successfully! 🚀");
    reset();
  } catch (error) {
    showError(error?.message || "Something went wrong!");
  }
};


  return (
    <>
      <hr />
      <div id="contact">
        <div className="contact-header">
          <h1 className="bold centre">Contact Me</h1>
        </div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              {...register("subject", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Message"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <button type="submit" className="btn shine" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;