import { TextField } from "@material-ui/core";
import axios from "axios";
import React, { Dispatch, SyntheticEvent, useEffect, useState } from "react"
import { connect } from "react-redux";
import Layout from "../components/Layout";
import { IUser } from "../models/user";
import { setUser } from '../redux/actions/setUserAction'

const Profile = (props: {user: IUser, setUser: (user: IUser) => void }) => {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');

    useEffect(() => {
        (
        async () => {
            //const {data} = await axios.get('user')
            setFirstName(props.user.first_name);
            setLastName(props.user.last_name);
            setEmail(props.user.email);
            // const {data} = await axios.get('user')
            // setFirstName(data.first_name);
            // setLastName(data.last_name);
            // setEmail(data.email);
        })()
console.log(`useeffect`)
    }, [props.user]);
    const infoSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.put('users/info', {
            first_name, last_name, email
        })
    }
    
    const passwordSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const {data} = await axios.put('users/password', {password, password_confirm})
        props.setUser(data)
    }
    
    return (
        <Layout>

      <h3>Account Information</h3>
            <form onSubmit={infoSubmit}>
                <div className="mb-3">
                    <label>First Name</label>
                    <TextField
                    className="form-control"
                    value={first_name}
                    onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Last Name</label>
                    <TextField
                    className="form-control"
                    value={last_name}
                    onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <TextField
                    className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <button className="btn btn-outline-secondary">Save</button>
            </form>

            <h3 className="mt-4">Change Password</h3>
            <form onSubmit={passwordSubmit}>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control"
                           onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Password Confirm</label>
                    <input type="password" className="form-control"
                           onChange={e => setPasswordConfirm(e.target.value)}
                    />
                </div>

                <button className="btn btn-outline-secondary">Save</button>
            </form>
    </Layout>
  )
};

export default connect(
    (state: { user: IUser }) => {
        return {
            user: state.user
        };
    },
    (dispatch: Dispatch<any>) => {
        return {
            setUser: (user: IUser) => dispatch(setUser(user))
        }
    }
)(Profile);
