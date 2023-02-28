import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { SyntheticEvent, useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Layout from "../../components/Layout";

const ProductForm = (props: any) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [redirect, setRedirect] = useState(false);
    let navigate = useNavigate();


    const params = useParams();
    console.log(params.id)


    useEffect(() => {
        // prefill form
        console.log(params.id)
        if(params.id){
            (async () => {
                const {data} = await axios.get(`products/${params.id}`)
                setTitle(data.title)
                setDescription(data.description)
                setImage(data.image)
                setPrice(data.price)
            })();
        }

    },[])

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        let data = {
            title, description, image, price
        }
        if(params.id){
            await axios.put(`products/${params.id}`, data)
        } else {
            await axios.post('products', data);
        }
        setRedirect(true)

        if (redirect) {
            return navigate("/products");
        }
    }
    return (
    <Layout>
      <form onSubmit={submit}>
        <div className="mb-3">
            <TextField 
            label='Title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <TextField 
            label='Description' 
            minRows={4} 
            multiline
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <TextField
            value={image}
            label='Image'
            onChange={e => setImage(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <TextField label='Price' 
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            />
        </div>
        <Button type='submit' variant="contained" color="primary"> Submit</Button>
      </form>
    </Layout>
  )
};

export default ProductForm
