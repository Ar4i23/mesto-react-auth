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
}) => {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        className={`modal__input ${
          isInputValid.name === undefined || isInputValid.name
            ? ""
            : "modal__input_error"
        }`}
        placeholder="Имя"
        required
        minLength={minLength}
        maxLength={maxLength}
        value={value.name ? value.name : ""}
        onChange={onChange}
        disabled={isSending}
      />
      <span className="modal__error" id="name-edit-error">
        {error.name}
      </span>
    </>
  );
};

export default Input;
