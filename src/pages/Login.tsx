import React from 'react';
import '../Login.css'
import styled, { css } from 'styled-components'



const StyledFormSignIn = styled.form`
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


const InputEmail = styled.input.attrs({ type: 'email' })`
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;


  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;

  &:focus {
      z-index: 2;
  }
}
`;
const InputPassword = styled.input.attrs({ type: 'password' })`
margin-bottom: 10px;
border-top-left-radius: 0;
border-top-right-radius: 0;

  
position: relative;
box-sizing: border-box;
height: auto;
padding: 10px;
font-size: 16px;

&:focus {
    z-index: 2;
}
}
`;
const Login = () => {
    return (
        <StyledFormSignIn>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <InputEmail type="email" id="inputEmail"  placeholder="Email address" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <InputPassword type="password" id="inputPassword"  placeholder="Password" required />
            <div className="checkbox mb-3">
                <label>
                    <StyledCheckbox type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-sm btn-primary btn-block" type="submit">Sign in</button>

        </StyledFormSignIn>


    )
}

export default Login;