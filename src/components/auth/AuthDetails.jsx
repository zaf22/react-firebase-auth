import React, {useEffect, useState} from 'react';
import {onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom';


const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        })
        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('signed out successfully!');
        }).catch((error) => {
            console.log(error);
        });
    }
    const navigate = useNavigate();
    const userSignIn = () => {
        navigate("/login");
    }
  return (
    <div>{authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <button onClick={userSignIn}>Sign In</button>}</div>
  )
}

export default AuthDetails