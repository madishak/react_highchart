import React, { useContext } from "react";
import { GlobalContext } from "../../index";
import Row from "./Row";
import "./styles.css";

const Table = () => {
  const state = useContext(GlobalContext);
  const data = Object.entries(state);

  return (
    <table>
      <thead>
        <tr>
          <th>Выручка, руб.</th>
          <th className="tablecell--blue">Текущий день</th>
          <th>Вчера</th>
          <th>День3</th>
          <th>День4</th>
          <th>День5</th>
          <th>День6</th>
          <th>День7</th>
        </tr>
      </thead>
      <tbody>
        {data.map((elem, i) => {
          return <Row key={i} data={elem} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
