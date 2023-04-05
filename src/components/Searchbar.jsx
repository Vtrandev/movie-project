import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Searchbar({ height, width }) {
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search">
      <input
        className="search__bar"
        type="text"
        placeholder="Search by Title"
        style={{
          // width: "50%",
          minWidth: "300px",
          height: height || "60px",
          fontSize: "24px",
          borderRadius: "24px",
          border: "1px solid black",
          padding: "12px 24px",
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" && navigate(`/search/${searchTerm}`)
        }
      />
      <button
      className="search__button"
        onClick={() => navigate(`/search/${searchTerm}`)}
      >
        <MagnifyingGlassIcon style={{ width: width || "40px" }} />
      </button>
    </div>
  );
}

export default Searchbar;
