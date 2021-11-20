import React, {useState,useEffect} from "react";
import Index from "./game/index.js";
import Login from "./Login";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "./firebase"
import {Loading} from "./loader";
import Context from "./contex";

const App = () =>{
    const [user, setUser] = useState(false);


    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user.displayName)
            }
            else
                setUser(user)

        });

    }, [])

    if(user === false)
        return <Loading />

    return (
         <Context.Provider value={{user}}>
            {user ? <Index/> : <Login setUser={setUser}/>}
        </Context.Provider>
    )
}



export default App;
