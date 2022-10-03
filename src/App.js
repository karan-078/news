import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './move/Home'
import Move from './move/Singlemovie'
import '../src/move/move.css'
const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Move/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=
// Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=05306b67-3a62-4bbe-8ba8-4f7ceb2451c9
// From: bounces+25030585-a01e-tmzxivupthvknyvfei=kvhrs.com@em9189.omdbapi.com

// Here is your key: 6c1d3b65