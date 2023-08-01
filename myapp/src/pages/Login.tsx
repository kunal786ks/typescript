import * as React from 'react';
import { getAuth,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

export interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
    const auth=getAuth();
    const navigate=useNavigate();
    const [authing,setAuthing]=React.useState(false);
  
    const signInWithGoogle=async () =>{
        setAuthing(true);
        signInWithPopup(auth,new GoogleAuthProvider())
        .then(response =>{
            console.log(response.user.uid);
            navigate('/');
        })
        .catch(error =>{
            console.log(error);
            setAuthing(false);
        })
    }


    return (
    <>
    <h2>Login here...</h2>
    <button onClick={()=> signInWithGoogle()} disabled={authing}>Login</button>
    </>
  );
};

export default Login;
