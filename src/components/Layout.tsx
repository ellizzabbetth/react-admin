import React, { Dispatch, useEffect, useState } from 'react'
import Nav from './Nav'
import Menu from './Menu'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import User from '../pages/User'
import { IUser } from '../models/user'
import {connect} from 'react-redux';
import { setUser } from '../redux/actions/setUserAction'

const Layout = (props: any) => {
    const [redirect, setRedirect] =  useState(false)
    //const [user, setUser] = useState<IUser | null>( null);

    useEffect( () => {
        (
            async () => {
                try {
                    const {data} = await axios.get('user', {withCredentials: true});
                   // console.log({data})
                  // setUser(data)
                    props.setUser(data)
                } catch (e) {
                    setRedirect(true)
                }
            }
        )();
        console.log('i fire once');
    }, [])

    if (redirect) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            <Nav/>
            {/* <Nav user={user}/> */}



                <div className="container-fluid">
                    <div className="row">
                        <Menu />

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Dashboard</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                    </div>
                                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                        <span data-feather="calendar"></span>
                                        This week
                                    </button>
                                </div>
                            </div>

                            {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}

                            
                            <div className="table-responsive">
                                {props.children}
                            </div>
                        </main>
                    </div></div>
            </div>


    )
}

const mapStateToProps = (state: { user: IUser }) => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setUser: (user: IUser) => dispatch(setUser(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);