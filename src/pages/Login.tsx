import React, { SyntheticEvent, useState } from 'react';
import '../Login.css'
import styled, { css } from 'styled-components'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const StyledMain = styled.main`
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
`;

const StyledCheckbox = styled.input`
    font-weight: 400;
`;

const StyledFormControl = styled.input`
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;

    &:focus {
        z-index: 2;
    }
`;


const InputEmail = styled(StyledFormControl).attrs({ type: 'email' })`
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;


  &:focus {
      z-index: 2;
  }
}
`;


const InputPassword = styled(StyledFormControl).attrs({ type: 'password' })`
margin-bottom: 10px;
border-top-left-radius: 0;
border-top-right-radius: 0;


&:focus {
    z-index: 2;
}
}
`;



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    let navigate = useNavigate();


    const submit = async (e: SyntheticEvent) => {
        console.log('here')
        e.preventDefault();
        await axios.post('login', {
            email,
            password
        }, {withCredentials: true});
    
        setRedirect(true)
      
        if (redirect) {
            return navigate("/");
        } else {
            console.log('failerd')
        }
    }

    return (
        <StyledMain>
            <form onSubmit={submit}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <InputEmail type="email" id="inputEmail"  
            onChange={e => setEmail(e.target.value)} placeholder="Email address" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <InputPassword type="password" id="inputPassword"  
            onChange={e => setPassword(e.target.value)} placeholder="Password1"  autoComplete="true" required />
            <div className="checkbox mb-3">
                <label>
                    <StyledCheckbox type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-sm btn-primary btn-block" type="submit">Sign in</button>
            {/* <div>Forgot password? One Time Password</div>
            <a href="#" className="stretched-link text-danger">Stretched link will not work here, because <code>position: relative</code> is added to the link</a> */}
            </form>
        </StyledMain>
    )
}

export default Login;