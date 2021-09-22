import React from "react";

export default function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ListId</th>
          <th>Name</th>
          <th>ID</th>
        </tr>
      </thead>
      {props.data.length > 0 && (
        <tbody className="table-body">
          {props.data.map((item, index) => (
            <tr key={index}>
              <td>{item.listId}</td>
              <td>{item.name}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}
