import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div>
      {/* <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button> */}
      <span>
        {currentPage} / {totalPages}
      </span>
      {/* <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button> */}
    </div>
  );
};

export default Pagination;
