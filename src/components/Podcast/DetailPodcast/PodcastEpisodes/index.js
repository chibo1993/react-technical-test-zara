import React from "react";
import { useTable } from "react-table";

function Table({ episodesPodcast }) {
  // Use the state and functions returned from useTable to build your UI

  const data = React.useMemo(() => episodesPodcast, [episodesPodcast]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "trackName",
      },
      {
        Header: "Date",
        accessor: "releaseDate",
      },
      {
        Header: "Duration",
        accessor: "trackTimeMillis",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  console.log("COMPONENT", headerGroups);
  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thread>
          {headerGroups.map((headergroup) => (
            <tr {...headergroup.getHeaderGroupProps()}>
              {headergroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thread>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
