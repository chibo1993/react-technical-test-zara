import React from "react";
import { useTable } from "react-table";
import { Link, useParams } from "react-router-dom"

function Table({ episodesPodcast }) {
  // Use the state and functions returned from useTable to build your UI
    const {podcastId} = useParams()
  const data = React.useMemo(() => episodesPodcast, [episodesPodcast]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "trackName",
        Cell: ({row}) => {
            return <Link
            key={row.original.trackId}
            to={`/podcast/${podcastId}/episode/${row.original.trackId}`}
        >
            {row.values.trackName}
            </Link> 
        }
      },
      {
        Header: "Date",
        accessor: "releaseDate",
        Cell: ({row}) => {
            const time = new Date(row.values.releaseDate)
            return  time.toLocaleDateString()
        }
      },
      {
        Header: "Duration",
        accessor: "trackTimeMillis",
        Cell: ({row}) => {
            const time = new Date(row.values.trackTimeMillis)
            return  time.toLocaleTimeString('es-ES')
        }
      },
    ],
    [podcastId]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headergroup) => (
            <tr {...headergroup.getHeaderGroupProps()}>
              {headergroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
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
