import React from "react";
import style from "./MainInput.module.scss";

type MainInputProps = {
  value: number | undefined;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  title: string;
};

const MainInput = (props: MainInputProps) => {
  const handleChange = (newValue: number | null) => {
    if (newValue != null) {
      props.setValue(newValue);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.title}>{props.title}</div>
      <input
        className={style.input}
        type="number"
        value={props.value}
        onChange={(e) => handleChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default MainInput;
