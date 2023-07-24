import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebaseConfig";
 
export const AuthContex = createContext(null)
 const auth = getAuth(app)
 const AuthPorvidets = ({children}) => {
    const [user, setUser ] = useState(null)

    // regester
 const createUser = (email , password ) => {
    return createUserWithEmailAndPassword(auth, email,password)
 }
//  signIn
const SignIn = (email, password) =>{
    return signInWithEmailAndPassword (auth, email, password)
}
const authInfo = {
    user,
    createUser,
    SignIn
}

    
    return (
        <AuthContex.Provider value={ authInfo}> 
            {children}
        </AuthContex.Provider>
    );
};

export default AuthPorvidets;