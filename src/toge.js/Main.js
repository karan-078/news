import React from "react";
import { useState } from "react";
import data from "./data";
import Togle from "./Togle";
import "./togel.css";
import { useEffect } from "react";

const getStoreThem = ()=>{
    let them = 'dark-them'
    if(localStorage.getItem('them')){
        them= localStorage.getItem('them')
    }
    return them
}
const Main = () => {
  const [mode, setMode] = useState(getStoreThem());

  useEffect(() => {
    document.documentElement.className = mode;
    localStorage.setItem('them',mode)
  }, [mode]);

  const mmuythem = () => {
    if (mode === "dark-them") {
      setMode("light-them");
    } else {
      setMode("dark-them");
    }
  };
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>BishtCoading</h1>
          <input
            type="checkbox"
            id="switch"
            className="checkbox"
            onClick={mmuythem}
          />
          <label htmlFor="switch" className="toggle" />
        </div>
      </nav>

      <section className="articles">
        {data.map((item) => {
          return <Togle key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};

export default Main;
