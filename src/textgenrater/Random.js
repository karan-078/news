import React from "react";
import { useState } from "react";
import data from "./data";
import "./random.css";
const Random = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handlSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);

    if (count <= 0) {
      amount = 1;
    }

    if (count >= 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <>
      <section className="section-center">
        <form action="" className="form-controal" onSubmit={handlSubmit}>
          <label htmlFor="amount">paragraph :</label>
          <input
            type="number"
            className="search-itme"
            id="amount"
            name="amount"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />

          <button type="submit">genrate</button>
        </form>

        <article className="text-value">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </>
  );
};

export default Random;
