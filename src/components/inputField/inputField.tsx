import React from "react";
import "./inputField.css";
import { isNullUndefinedOrEmpty } from "../../utils/stringUtils";

interface IFProps {
  label: string;
  placeHolder: string;
  value: string | number;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  postChange?: () => void;
  validator: (e: string) => string | undefined | null;
  error: string | undefined;
  setError: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  required?: boolean;
  hidden?: boolean;
}

function InputField({
  label,
  placeHolder,
  value,
  onChange,
  error,
  setError,
  validator,
  disabled = false,
  required = true,
  hidden = false,
  postChange = () => {
    //
  },
}: IFProps) {
  function onChangeState(e: React.ChangeEvent<HTMLInputElement>) {
    const res = validator(e.target.value);
    if (!isNullUndefinedOrEmpty(res)) {
      setError(res ?? "");
    } else {
      setError("");
    }
    onChange(e.target.value);
    postChange();
  }

  return (
    <div className="inputWrapper">
      <label>{label}</label>
      <input
        className={`inputField ${isNullUndefinedOrEmpty(error)?"":"errorInputField"}`}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChangeState(e)}
        disabled={disabled}
        required={required}
        hidden={hidden}
      ></input>
      {error && <span>{error}</span>}
    </div>
  );
}

export default InputField;

export { InputField };
