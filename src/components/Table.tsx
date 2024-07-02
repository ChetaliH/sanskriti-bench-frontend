import React from 'react';
import '../UserView.css';

interface ScrollableTableProps {
  headers: string[];
  data: string[][];
}

const ScrollableTable: React.FC<ScrollableTableProps> = ({ headers, data }) => {
  return (
    <div className="table-container">
      <table className="scrollable-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrollableTable;

