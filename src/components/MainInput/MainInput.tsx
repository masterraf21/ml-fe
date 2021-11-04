import React from "react";
import "./MainInput.module.css";

type MainInputProps = {
  value: number | undefined;
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
  title: string;
};

const MainInput = (props: MainInputProps) => {
  const handleChange = (newValue: number | null) => {
    if (newValue != null) {
      props.setValue(newValue);
    }
  };

  return (
    <div className="container">
      <div className="title">{props.title}</div>
      <input
        className="input"
        type="number"
        value={props.value}
        onChange={(e) => handleChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default MainInput;
