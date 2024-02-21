import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';


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
    <div classname='sign-in-container'>
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
    </div>
  )
}

export default SignIn