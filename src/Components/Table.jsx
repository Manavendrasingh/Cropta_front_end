import React from "react";

const Table = ({obj}) => {
  
  const {code ,rate , volume ,cap , delta} = obj;
  return (
    <>
        <tbody>
          <tr>
            <th>1</th>
            <td>{code}</td>
            <td>{rate}</td>
            <td>{volume}</td>
            <td>{cap}</td>
            <td>{delta.hour}</td>
            <td>{delta.day}</td>
            <td>{delta.week}</td>
            <td>{delta.month}</td>
            <td>{delta.quarter}</td>
            <td>{delta.year}</td>
          </tr>
         
          
        </tbody>
    </>
  );
};
export default Table;
