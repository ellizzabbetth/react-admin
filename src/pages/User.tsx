import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
import { IUser } from '../../models/user';

import Layout from '../components/Layout'

const User = () => {

  const [users, setUsers] = useState<IUser[]>([])


  useEffect(() => {
    (async () => {
      const {data} = await axios.get('ambassadors')
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
          {users.map(user => {
              return (
                <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.first_name} {user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell></TableCell>
                </TableRow>

    
              )
            })}
          </TableBody>
        </Table>



        </Layout>

  )
}

export default User;