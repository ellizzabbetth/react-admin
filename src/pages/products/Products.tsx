
import axios from "axios";
import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout";
import { Product } from "../../models/product";
import {  Button, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core';
import TablePaginationWrapper from "../../components/TablePaginationWrapper";
const Products = () => {
  const [products, setProducts] =useState<Product[]>([])
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

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get('ambassadors')
  //     setUsers(data)

  //   })()
  // })
  useEffect(() => {(
    async () => {
      const {data} = await axios.get('products');
      setProducts(data)
  })();


  }, [])

  const del = async (id:number) => {
   if(window.confirm(`Are you sure?`)){
    await axios.delete(`products/${id}`)
    setProducts(products.filter(p => p.id !== id))
   } 
  }

  return (
    <Layout>
        <Table>
        <TableHead>
            <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
            </TableRow>
        </TableHead>
        {products.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map(product => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell><img src={product.image} width={50}/></TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary"
                  onClick={()=> del(product.id)}
                  >Delete</Button>
                </TableCell>
              </TableRow>
            )
          })}
        <TableFooter>
          {/* <TablePaginationWrapper items={products}></TablePaginationWrapper> */}
          <TablePagination 
            count={products.length}
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

export default Products;
