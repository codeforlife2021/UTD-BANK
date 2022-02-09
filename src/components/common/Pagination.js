import { useEffect } from "react";
import { useState } from "react";
const Pagination = ({ pages, setCurrentPage }) => {
  const numOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }
  const [currentButton, setCurrentButton] = useState(1);
  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);
  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>5</b> out of <b>25</b> entries
      </div>
      <ul className="pagination">
        <li
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
          onClick={() =>
            setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          Previous
        </li>
        {numOfPages.map((page, index) => {
          return (
            <li
              key={index}
              className={`${
                currentButton === page ? "page-item active" : "page-item"
              }`}
              onClick={() => setCurrentButton(page)}
            >
              {page} 
            
            </li>
          );
        })}
        <li
          className={`${
            currentButton === numOfPages.length
              ? "page-item disabled"
              : "page-item"
          }`}
          onClick={() =>
            setCurrentButton((prev) =>
              prev === numOfPages.length ? prev : prev + 1
            )
          }
        >
          Next
        </li>
      </ul>
    </div>
  );
};
export default Pagination;