import { Button, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
import { setSourceMapRange } from 'typescript';
import { IUser } from '../models/user';

import Layout from '../components/Layout'
import { link } from 'fs';

const User = () => {

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
      const { data } = await axios.get('ambassadors')
      setUsers(data)

    })()
  })


  return (

    <Layout>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map(user => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.first_name} {user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                <Button 
                href={`users/${user.id}/links`}
                variant="contained" color="primary">View</Button>
              </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        <TableFooter>
          <TablePagination 
            count={users.length}
            onPageChange={handleChangePage}
            page={page}
            rowsPerPage={10}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </Layout>

  )
}

export default User;