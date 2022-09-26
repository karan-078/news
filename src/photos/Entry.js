import React from "react";
import Photo from "./Photo";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import "./index.css";
const clientId = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const mainUrl = "https://api.unsplash.com/photos/";
const searchUrl = `https://api.unsplash.com/search/photos/`;
const Entry = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [queary, setQueary] = useState("");
  const mounted = useRef(false);
  const [newImage, setnewIMage] = useState(false);
  const fetchImage = async () => {
    setLoading(true);
    let url;

    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${queary}`;

    if (queary) {
      url = `${searchUrl}${clientId}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientId}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();

      setPhotos((oldPhotos) => {
        if (queary && page === 1) {
          return data.results;
        } else if (queary) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setnewIMage(false)
      setLoading(false);
    } catch (error) {
      setnewIMage(false)
      setLoading(false);
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchImage();
    //  eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    if(!newImage)return
    if(loading)return
    setPage((oldpage)=>oldpage+1);
    // eslint-disable-next-line
  }, [newImage]);

  const event = ()=>{
    if(window.innerHeight+window.scrollY >= document.body.scrollHeight-2){
      setnewIMage(true)
    }
  }


  useEffect(()=>{
    window.addEventListener('scroll',event);
    return()=>window.removeEventListener('scroll',event)
    //  eslint-disable-next-line
  },[])
  // refactor scrool page code
  // useEffect(() => {
  //   const event = window.addEventListener("scroll", () => {
  //     if (
  //       !loading &&
  //       window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
  //     ) {
  //       setPage((oldPage) => oldPage + 1);
  //     }
  //   });

  //   return () => window.removeEventListener("scroll", event);
  //   // eslint-disable-next-line
  // }, []);

  const handlSubmit = (e) => {
    e.preventDefault();
    // fetchImage()
    if (!queary) return;
    if (page === 1) {
      fetchImage();
    }
    setPage(1);
  };
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            className="form-input"
            placeholder="Search photo"
            value={queary}
            onChange={(e) => setQueary(e.target.value) }
          />
          <button type="submit" className="submit-btn" onClick={handlSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>

      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>

        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
};

export default Entry;
