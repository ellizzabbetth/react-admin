import { Button, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react"
import Layout from "../components/Layout";
import {Link} from "../models/link";
import { IUser } from "../models/user";

const Link = (props: any) => {

  const [links, setLinks] = useState<Link[]>([]);
  const [users, setUsers] = useState<IUser[]>([])
  const [page, setPage] = useState(0);
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

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`users/${props.match.params.id}/links`);
      console.log(data)
      setLinks(data)

    })()
  })

  return (
    <Layout>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Code</TableCell>
          <TableCell>Count</TableCell>
          <TableCell>Revenue</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {links.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map(link => {
          return (
            <TableRow key={link.id}>
              <TableCell>{link.id}</TableCell>
              <TableCell>{link.code}</TableCell>
              <TableCell>{link.orders.length}</TableCell>
              <TableCell>
                {link.orders.reduce((s,o) => s + o.total, 0)}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
      <TableFooter>
        <TablePagination 
          count={links.length}
          onPageChange={handleChangePage}
          page={page}
          rowsPerPage={10}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableFooter>
    </Table>
  </Layout>
  )
};

export default Link;
