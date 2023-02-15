import React from 'react';
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
const Register = () => {
    return (
        <StyledFormSignIn>

        <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
        <label htmlFor="inputFirstName" className="sr-only">First Name</label>
        <input  id="inputFirstName" className="form-control" placeholder="First Name" required autoFocus />
        <label htmlFor="inputLastName" className="sr-only">Last Name</label>
        <input id="inputLastName" className="form-control" placeholder="Last Name" required autoFocus />
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <label htmlFor="inputPasswordConfirm" className="sr-only">Password</label>
        <input type="password" id="inputPasswordConfirm" className="form-control" placeholder="Password Confirm" required />
        <div className="checkbox mb-3">
            <label>
                <StyledCheckbox type="checkbox" value="remember-me" /> Remember me
            </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
    </StyledFormSignIn>
    )
}

export default Register;