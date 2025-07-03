import React from "react";

const InputField = ({
  name,
  label,
  type = "text",
  register,
  errors,
  required = false,
  rules = {},
}) => {
  const isTextArea = type === "textarea";

  const combinedRules = {
    ...(required && !rules.required ? { required: `${label} is required` } : {}),
    ...rules,
  };

  const inputProps = {
    className: `form-control ${errors[name] ? "invalid" : ""}`,
    placeholder: label,
    ...register(name, combinedRules),
  };

  return (
    <div className="form-group">
      {isTextArea ? (
        <textarea {...inputProps} rows="5" />
      ) : (
        <input type={type} {...inputProps} />
      )}
      {errors[name] && (
        <p className="error-message">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default InputField;