import React, { useState } from "react";
import "./grc.css";
import List from "./List";
import Alert from "./Alert";
import { useEffect } from "react";

 const getlocalstorage = ()=>{
    let list = localStorage.getItem('list')

    if(list){
        return JSON.parse(localStorage.getItem('list'))
    }

    else {
        return [];
    }
 }


const Main = () => {
  const [name, setName] = useState("");
  const [isEditing, issetEditing] = useState(false);
  const [list, setList] = useState(getlocalstorage())
  const [ediet, setEdit] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    msg: "",
    type: "",
  });

  const handlChange = (e) => {
    e.preventDefault();

    if (!name) {
      Showalert(true,'please enter value','danger')
    } else if (name && isEditing) {
      setList(list.map((item)=>{
        if(ediet===item.id){
            return {...item ,title:name}
        }
        return item;
      }))

      setName('')
      setEdit(null)
      issetEditing(false);
      Showalert(true, 'item edit','sucsess')
    } else {
      let newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  const Showalert = (show=false, msg="", type="danger")=>{
    setAlert({show,msg,type})
  }

  const removeItem = (id)=>{
    Showalert(true,"remove item",'danger')

    setList(list.filter((item)=>item.id!==id))
  }

 const EditItem =(id)=>{
   const specaficItem = list.find((item)=>item.id===id) 
   issetEditing(true)
   setEdit(id)
   setName(specaficItem.title)
 }


 useEffect(()=>{
 localStorage.setItem('list', JSON.stringify(list))
 },[list])
  return (
    <section className="section-center">
      <h1 className="heading">ADD NOTE</h1>
      <form className="from-controla" onSubmit={handlChange}>
        {alert.show && <Alert {...alert} removeAlert={Showalert} list={list}/>}

        <div className="input-container">
          <input
            type="text"
            value={name}
            placeholder="enter your item"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <button className="submit-btn" type="submit">
            {isEditing ? "ediet" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="list-container">
          <List items={list} removeItem={removeItem} EditItem={EditItem} />
          <button className="clear-btn" onClick={()=>setList([])}>clearitem</button>
        </div>
      )}
    </section>
  );
};

export default Main;
