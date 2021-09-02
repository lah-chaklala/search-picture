import React, { useState, useEffect } from "react";
import { Pagination } from "@material-ui/lab";
import { Grid, Divider } from "@material-ui/core";

import CustomSelector from "./CustomSelector";

function CustomPagination({
  withSelector,
  numberOfItemPerPage,
  getData,
  renderPage,
}) {
  const [itemPerPage, setItemPerPage] = useState(numberOfItemPerPage);
  const [itemsOfPage, setItemsOfPage] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfItem, setNumberOfItem] = useState(0);

  useEffect(() => {
    (async () => {
      const { numberOfItems, items } = await getData(page, itemPerPage);
      setItemsOfPage(items);
      setNumberOfItem(numberOfItems);
    })();
  }, [page, itemPerPage, getData]);

  let rowsPerPageOptions;

  if (withSelector) {
    rowsPerPageOptions = [
      { label: "10", value: 10 },
      { label: "20", value: 20 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
    ];

    if (!rowsPerPageOptions.filter((item) => item.value === itemPerPage).length) {
      rowsPerPageOptions.push({ label: `${numberOfItemPerPage}`, value: numberOfItemPerPage });
    }
  }

  function onItemPerPageChange(newValue) {
    console.log('item per page', newValue);
    setItemPerPage(newValue);
  }

  function onChangePage(newPage) {
    console.log(newPage);
    setPage(newPage);
  }

  return (
        <Grid container alignItems="center" spacing={5} style={{ marginTop: 10}}>
          <Grid item xs={12}>
          <p> {`results: ${numberOfItem}`} </p>
        </Grid>      
      
      {numberOfItem > 0 && withSelector && (
        <Grid item xs={3}>
          <CustomSelector
            title="item per page"
            selected={itemPerPage}
            values={rowsPerPageOptions}
            onChange={(event) => onItemPerPageChange(event.target.value)}
          />
        </Grid>      

      )}
      {numberOfItem > 0 && 
        <React.Fragment>
        <Grid item xs={9}>
          <Pagination
            page={page}
            count={Math.ceil(numberOfItem / itemPerPage)}
            onChange={(event, page) => onChangePage(page)}
            showFirstButton
            showLastButton
            size="large"
          />
        </Grid>          
        
        <Grid item xs={12}>          
          <Divider />
          {renderPage(itemsOfPage)}
        </Grid>
        </React.Fragment>
      }
    </Grid>
  );
}

CustomPagination.defaultProps = {
  numberOfItemPerPage: 10,
  withSelector: false,
};

export default CustomPagination;
