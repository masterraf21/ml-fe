import React from "react";
import style from "./Dropdown.module.scss";

type DropdownProps = {
  value: number | undefined;
  title: string;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  placeholder?: string;
  options: IDropdownOption[];
};

const Dropdown = (props: DropdownProps) => {
  // const handleChange = (newValue: string | null) => {
  //   if (newValue != null) {
  //     props.setValue(newValue);
  //   }
  // };

  return (
    <div className={style.container}>
      <div className={style.title}>{props.title}</div>
      <select
        className={style.input}
        value={props.value}
        onChange={(e) => props.setValue(+e.target.value)}
      >
        {/* <option value={undefined}>{props.placeholder}</option> */}
        {props.options.map((item, idx) => (
          <option key={idx} value={+item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
