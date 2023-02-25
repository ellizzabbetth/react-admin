import React, { useEffect, useState } from "react"
import {  Button, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core';

const TablePaginationWrapper = (items: any) => {
    console.log(items.length)
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

  return (

    <TablePagination 
        count={items.length}
        onPageChange={handleChangePage}
        page={page}
        rowsPerPage={10}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
};

export default TablePaginationWrapper
