import React from "react";
import s from "./Search.module.scss";
import search from "..//../img/search.png";
export const Search = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");
  const inputRef = React.useRef();
  const onChangeInput = (event) => {
    setValue(event.target.value);
  };
  React.useEffect(() => {
    const cheched = (length, val) => {
      console.log(val);
      if (length < 4 && length !== 0) {
        setError("Ошибка слишком коротко");
      } else if (length > 16) {
        setError("Ошибка слишком динно");
      } else {
        setError("");
      }
      for (let i = 0; i < val.length; i++) {
        console.log(val[i]);
        if (
          val[i] === "!" ||
          val[i] === "@" ||
          val[i] === "#" ||
          val[i] === "$" ||
          val[i] === "%" ||
          val[i] === "^" ||
          val[i] === "&" ||
          val[i] === "*" ||
          val[i] === "^" ||
          val[i] === "(" ||
          val[i] === ")"
        ) {
          setError("Ошибка не допустимый символ");
        }
      }
    };
    cheched(value.length, value);
  }, [value]); // не забыть подключить готовую библиотеку для проверки а не это
  console.log(value);
  return (
    <div className={s.root}>
      <div className={s.loupe}>
        <img src={search} alt="search" />
      </div>
      <input
        type="text"
        placeholder="Where do you want to call?"
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
      />
      <div className={s.loupe}>
        <img src={search} alt="search" />
      </div>

      <div className={s.error}>{error}</div>
    </div>
  );
};
