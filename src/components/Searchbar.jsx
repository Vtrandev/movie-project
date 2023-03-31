import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Searchbar({ height, width }) {
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
      />
      <button style={{ marginLeft: "20px" }}>
        <MagnifyingGlassIcon style={{ width: width || "40px" }} />
      </button>
    </div>
  );
};

export default Searchbar;
