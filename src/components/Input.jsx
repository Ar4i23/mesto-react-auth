import React from "react";

const Input = ({
  id,
  name,
  type,
  isInputValid,
  value,
  error,
  minLength,
  maxLength,
  onChange,
  isSending,
  placeholder,
}) => {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        className={`${
          name === "email" || name === "password"
            ? "login__input"
            : "modal__input"
        }         ${
          isInputValid === undefined || isInputValid ? "" : "modal__input_error"
        }`}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        value={value ? value : ""}
        onChange={onChange}
        disabled={isSending}
      />
      <span className="modal__error" id="name-edit-error">
        {error}
      </span>
    </>
  );
};

export default Input;
