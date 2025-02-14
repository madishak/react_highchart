import React, { useState } from "react";
import LineChart from "./LineChart";

const Row = (props) => {
    const [showRow, setShowRow] = useState(false);
    const [name, { today, yesterday, day3, day4, day5, day6, day7 }] = props.data;
    const yesterdayPercents = Math.round(((today - yesterday) * 100) / yesterday);
  
    const handleClick = () => {
      setShowRow(!showRow);
    };
  
    return (
      <>
        <tr onClick={handleClick}>
          <td>{name}</td>
          <td className="tablecell--blue">{today}</td>
          <td
            className={
              yesterdayPercents >= 0 ? "table__cell--green" : "table__cell--red"
            }
          >
            {yesterday}
            <span className={yesterdayPercents >= 0 ? "table__percents--green" : "table__percents--red"}>{yesterdayPercents}%</span>
          </td>
          <td>{day3}</td>
          <td>{day4}</td>
          <td>{day5}</td>
          <td>{day6}</td>
          <td>{day7}</td>
        </tr>
        <tr className={showRow ? "table__row--active " : "table__row"}>
          <td colSpan={8}>
            <LineChart
              options={{ today, yesterday, day3, day4, day5, day6, day7 }}
            />
          </td>
        </tr>
      </>
    );
  };

  export default Row;