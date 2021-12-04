import * as React from 'react';
import {AppContext} from '../App';


interface Props {}

function NotAuthenticated(props: Props) {
  const {} = props;
  const {authClient, isAuthenticated,setIsAuthenitcated} = React.useContext(AppContext);


  return (
    <section>
      <h1>You are not authenticated</h1>
      <button onClick={(async ( ) => { await 
      authClient?.login({
        identityProvider: process.env.II_URL
      });
      console.log(authClient);
      })
      }>Login with II</button>
    </section>
  );
}   

export default React.memo(NotAuthenticated);