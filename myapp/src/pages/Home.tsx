import * as React from 'react';
import { getAuth,signOut } from 'firebase/auth';
export interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const auth=getAuth();
    return (
        <div>
    <div>welcome to the Home pag e</div>
    <button onClick={()=> signOut(auth)}>Sign out</button>
    </div>
  );
};

export default HomePage;
