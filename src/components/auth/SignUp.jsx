import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { auth } from "../../firebase";


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
    <div classname='sign-up-container'>
        <form onSubmit={signUp}>
            <h1>Create Account!</h1>

            <input type='email' placeholder='email@email.com' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}>     
            </input>

            <input type='password' placeholder='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
            </input>

            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp