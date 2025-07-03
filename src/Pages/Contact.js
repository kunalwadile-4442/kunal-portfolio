import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { postData } from "../utils/api";
import { showSuccess, showError } from "../utils/toastUtils";
import Footer from "../Components/Footer";
import InputField from "../Components/InputField";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await postData("/contact", data);
      showSuccess("Thanks for reaching out! I'll get back to you as soon as possible.");
      reset();
    } catch (error) {
      showError(error?.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    const firstError = Object.keys(errors)[0];
    if (firstError) setFocus(firstError);
  }, [errors, setFocus]);

  return (
    <>
      <hr />
      <div id="contact">
        <div className="contact-header">
          <h1 className="bold centre">Contact Me</h1>
        </div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            name="name"
            label="Name"
            register={register}
            errors={errors}
            required
            rules={{
              required: "Please enter your name",
              maxLength: {
                value: 256,
                message: "Name can't exceed 256 characters",
              },
            }}
          />
          <InputField
            name="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
            required
            rules={{
              required: "Please enter your email",
              maxLength: {
                value: 256,
                message: "Email must be under 256 characters",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }}
          />
          <InputField
            name="subject"
            label="Subject"
            register={register}
            errors={errors}
            required
            rules={{
              required: "Please enter your subject",
              maxLength: { value: 256, message: "Max 256 characters" },
            }}
          />
          <InputField
            name="phone"
            label="Phone"
            register={register}
            errors={errors}
            required
            rules={{
              required: "Please enter your phone number",
              pattern: {
                value: /^\+?\d{10,15}$/,
                message: "Valid 10-digit or international phone number",
              },
            }}
          />
          <InputField
            name="message"
            label="Message"
            type="textarea"
            register={register}
            errors={errors}
            required
            rules={{
              required: "Please enter your message",
              maxLength: {
                value: 1000,
                message: "Message can't exceed 1000 characters",
              },
            }}
          />
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