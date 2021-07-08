import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const PaginationTable = ({itemsPerPage,totalItems,handleChange,currentPage,}) => {
  
  //const classes = useStyles();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <section>
    <div>
      <Pagination
      variant="outlined" shape="rounded"
      color="standard"
        style={{
          paddingBottom: "20px",
          paddingTop: "20px",
          alignContent: "end",
          fontSize:'16px',
         
        }}
        count={pageNumbers.length}
        page={currentPage}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
      </div>
      </section>
  );
};

export default PaginationTable;
