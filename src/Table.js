import React, { useState } from "react";
import "./Table.css";

export default function Table() {
  const [num, setNum] = useState("");

  function generateTable() {
    if (num <= 0) {
      return;
    }

    const table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(
        <tr>
          <td>
            {num} x {i} = {num * i}
          </td>
        </tr>
      );
    }

    return <table>{table}</table>;
  }

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <div>{generateTable()}</div>
    </div>
  );
}
