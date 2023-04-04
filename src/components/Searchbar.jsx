import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import axios from "axios";

function Searchbar({ height, width }) {
  let navigate = useNavigate();

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "50px"}}
    >
      <input
        type="text"
        placeholder="Search by Title"
        style={{
        //   minWidth: "300px",
          maxWidth: "800px",
          height: height || "60px",
          fontSize: "30px",
          borderRadius: "24px",
          border: "1px solid black",
          padding: "12px 24px",
        }}
        onChange={(e)=> setSearchTerm(e.target.value)}
        onKeyPress={(event) => event.key === "Enter" && navigate(`/search/${searchTerm}`)}
      />
      <button style={{ marginLeft: "20px" }} onClick={() => navigate(`/search/${searchTerm}`)}>
        <MagnifyingGlassIcon style={{ width: width || "40px" }} />
      </button>
    </div>
  );
};

export default Searchbar;
