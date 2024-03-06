import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate("/home");
                console.log(userCredential);

            }).catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    return (
        /**<div classname='sign-in-container'>
            <form onSubmit={signIn}>
                <h1>Log in!</h1>
    
                <input type='email' placeholder='email@email.com' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}>     
                </input>
    
                <input type='password' placeholder='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button type='submit'>Log In</button>
            </form>
        </div>***/
        <Form onSubmit={signIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default SignIn