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
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr>
                <td>{user.id}</td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
                <td></td>
              </tr>
              )
            })}

          </tbody>
        </table>


        </Layout>

  )
}

export default User;