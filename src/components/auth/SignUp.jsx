import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { auth } from "../../firebase";
import { Button, Container, Form } from 'react-bootstrap';


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            alert('User created!')
        }).catch((error) => {
            console.log(error);
            alert(error);
        });
    }

  return (
    <Container style={{textAlign:'center', display: 'flex',  justifyContent:'center'}}>
        <Form onSubmit={signUp}>
            <h1>Create Account!</h1>

            <Form.Control type='email' placeholder='email@email.com' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}>     
            </Form.Control>

            <Form.Control type='password' placeholder='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
            </Form.Control>

            <Button type='submit'>Sign Up</Button>
        </Form>
    </Container>
  )
}

export default SignUp