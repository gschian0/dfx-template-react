import * as React from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { hello } from "../../declarations/hello"
import NotAuthenticated from './components/NotAuthenticated';
import Header from './components/Header';

export const AppContext = React.createContext<{
    authClient?: AuthClient;  
    isAuthenticated?: boolean;
    setIsAuthenitcated? : React.Dispatch<boolean>;
    
  }>({});


const App = () => {
    const [authClient, setAuthClient] = React.useState<AuthClient | undefined>(undefined);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [time, setTime] = React.useState(0);
    // hello.getTime().then(console.log);
    hello.getPrincipal().then(console.log);
    React.useEffect(() => {
        AuthClient.create().then(async (client)=> {
        setAuthClient(client);
        setIsAuthenticated(await client.isAuthenticated());
        setIsLoaded(true);
        });
    }, []);

    if (!authClient) return null;
    return (
        <main>
            <AppContext.Provider value={{authClient, isAuthenticated}}>
            <Header/>
            {setTimeout(() => {{hello.getTime().then(console.log); setTime(time + 1);}}, 1000)}
            
            {!isLoaded && !isAuthenticated ? (
            <></>
            ) : isLoaded ? (
            <NotAuthenticated/>
            ) : (
            <h1>coolBro</h1>
            )}

            </AppContext.Provider>
        </main>
    )
}

export default App;