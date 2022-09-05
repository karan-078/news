

import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import "./slider.css";
import { useEffect } from "react";
import people from "./data";
const Slider = () => {
  const [user, setuser] = useState(data);
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((oldindex) => {
      let index = oldindex + 1;

      if (index > user.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prev = () => {
    setIndex((oldindex) => {
      let index = oldindex - 1;

      if (index < 0) {
        index = user.length - 1;
      }
      return index;
    });
  };

  useEffect(()=>{
    let slider = setInterval(()=>{
      setIndex((oldindex)=>{
        let index = oldindex+1;
        if(index>people.length-1){
          index=0
        }
        return index;
      })
    },5000)

    return () =>{
      clearInterval(slider)
    }
  },[index])

  return (
    <>
      <section className="section">
        <div className="titel">
          <h2>
            <span>/</span>Reviwes
          </h2>
        </div>

        <div className="section-center">
          {user.map((person, personindex) => {
            const { id, image, name, title, quote } = person;

            let position = "nextslide";

            if (personindex === index) {
              position = "active";
            }

            if (
              (personindex ===
                index - 1 || (index === 0 && personindex === user.length - 1))
            ) {
              position = "firstslide";
            }

            return (
              <article key={id} className={position}>
                <img src={image} alt={name} className="person-image" />
                <h4 className="name">{name}</h4>
                <h4 className="titel">{title}</h4>
                <p className="text">{quote}</p>

                <FaQuoteRight className="icon" />
              </article>
            );
          })}

          <button className="prev" onClick={next}>
          <FiChevronLeft />
          
          </button>

          <button className="next" onClick={prev}>
          <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Slider;
