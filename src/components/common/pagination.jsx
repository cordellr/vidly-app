import React from "react";
import _ from "lodash";

const Pagination = props => {
  //these are defined in props on movies.jsx
  //object destructring
  const { itemsCount, pageSize, onPageChange } = props;
  //calculates number of pages
  //Math.ceil returns integer greater than or equal to floating point number
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  //creates array from 1 to number of pages using lodash
  const pages = _.range(1, pagesCount + 1);

  //dynamically maps a page list item for each item in pages array
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className="page-item">
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
